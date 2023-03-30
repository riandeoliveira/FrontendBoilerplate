import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getUsers(): any {
    return {
      users: [
        {
          name: "João",
          age: 20,
        },
        {
          name: "Henrique",
          age: 24,
        },
        {
          name: "Paulo",
          age: 17,
        },
      ],
    };
  }
}
