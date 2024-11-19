import { burgersService } from "../services/BurgersService";
import BaseController from "../utils/BaseController";

export class BurgersController extends BaseController {
  constructor() {
    super('api/burgershack');
    this.router.get('', this.getBurgers)
    this.router.get('/test', this.test)
  }

  test(request, response, next) {
    console.log('Request test success');
    response.send("Response test success")
  }

  getBurgers(request, response, next) {
    const burgers = burgersService.getBurgers()
    response.send(burgers)
  }

}