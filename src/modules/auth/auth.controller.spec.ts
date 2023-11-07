import { Test, TestingModule } from "@nestjs/testing";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

describe('AuthController', () => {
    let controller: AuthController;
    let service: AuthService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [AuthController],
            providers: [AuthService]
        }).compile();

        service = module.get<AuthService>(AuthService);
        controller = module.get<AuthController>(AuthController);

    });

    describe('register', () => {
        it('should return 201', async () => {
            const result = await controller.register({
                email: 'test@test.com',
                password: 'test123',
                firstName: 'test_nombre',
                lastName: 'test_apellido',
            });

            expect(result).toEqual({
                email: 'test@test.com',
                password: 'test123',
                firstName: 'test_nombre',
                lastName: 'test_apellido',
            });

            it('should be defined', () => {
                expect(controller).toBeDefined();
            });

        })
    })
});