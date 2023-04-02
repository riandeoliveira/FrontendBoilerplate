import { Router } from "express";
import { userController } from "../controllers/UserController";

export const router = Router();

router.get("/api/users/all", userController.findAll);

// router.get("/api/users/all", (request: Request, response: Response) => {
//   const userRepository = new UserRepository();

//   const findAllUsersUseCase = new FindAllUsersUseCase(
//     request,
//     response,
//     userRepository
//   );

//   const users = findAllUsersUseCase.execute();

//   return response.status(200).json(users);
// });

// router.post("/api/users/register", (request: Request, response: Response) => {
//   const userRepository = new UserRepository();

//   const registerUserUseCase = new RegisterUserUseCase(
//     request,
//     response,
//     userRepository
//   );

//   const createdUser = registerUserUseCase.execute();

//   return response.status(201).json(createdUser);
// });
