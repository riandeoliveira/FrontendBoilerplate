import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updateProfile,
  updateEmail as updateUserEmail,
  updatePassword as updateUserPassword,
  type User,
  type UserCredential,
} from "firebase/auth";
import { deleteDoc, doc, setDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "services/firebase";
import { State } from "types/state";
import { create } from "zustand";

export const useUserStore = create<State.User>((set, get): State.User => {
  return {
    user: {
      id: "",
      name: "",
      email: "",
      authenticated: false,
    },

    clear() {
      set({
        user: {
          id: "",
          name: "",
          email: "",
          authenticated: false,
        },
      });
    },

    async delete(): Promise<void> {
      try {
        await deleteDoc(doc(db, "users", auth.currentUser?.uid as string));

        await auth.currentUser?.delete();

        get().clear();
      } catch (error) {
        console.error(error);
      }
    },

    async login(email: string, password: string): Promise<void> {
      try {
        const credentials: UserCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        const { uid, displayName } = credentials.user;

        set({
          user: {
            id: uid,
            name: displayName as string,
            email,
            authenticated: true,
          },
        });
      } catch (error) {
        console.error(error);
      }
    },

    async logout(): Promise<void> {
      try {
        await auth.signOut();

        get().clear();
      } catch (error) {
        console.error(error);
      }
    },

    async register(
      name: string,
      email: string,
      password: string
    ): Promise<void> {
      try {
        const credentials: UserCredential =
          await createUserWithEmailAndPassword(auth, email, password);

        await updateProfile(credentials.user, { displayName: name });

        const userId: string = credentials.user.uid;

        await setDoc(doc(db, "users", userId), {
          name,
          email,
        });

        set({
          user: {
            id: userId,
            name,
            email,
            authenticated: true,
          },
        });
      } catch (error) {
        console.error(error);
      }
    },

    async resetPassword(email: string): Promise<void> {
      try {
        await sendPasswordResetEmail(auth, email);
      } catch (error) {
        console.error(error);
      }
    },

    async updateEmail(email: string): Promise<void> {
      try {
        await updateUserEmail(auth.currentUser as User, email);

        await updateDoc(doc(db, "users", auth.currentUser?.uid as string), {
          email,
        });
      } catch (error) {
        console.error(error);
      }
    },

    async updateName(name: string): Promise<void> {
      try {
        await updateProfile(auth.currentUser as User, { displayName: name });

        await updateDoc(doc(db, "users", auth.currentUser?.uid as string), {
          name,
        });
      } catch (error) {
        console.error(error);
      }
    },

    async updatePassword(password: string): Promise<void> {
      try {
        await updateUserPassword(auth.currentUser as User, password);
      } catch (error) {
        console.error(error);
      }
    },

    verifyAuth(): void {
      onAuthStateChanged(auth, (user: User | null) => {
        if (user) {
          set({
            user: {
              id: user.uid,
              name: user.displayName as string,
              email: user.email as string,
              authenticated: true,
            },
          });
        } else {
          set({
            user: {
              id: "",
              name: "",
              email: "",
              authenticated: false,
            },
          });
        }
      });
    },

    async verifyEmail(): Promise<void> {
      try {
        await sendEmailVerification(auth.currentUser as User);
      } catch (error) {
        console.error(error);
      }
    },
  };
});
