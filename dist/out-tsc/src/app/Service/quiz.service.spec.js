import { TestBed } from '@angular/core/testing';
import { QuizService } from './quiz.service';
describe('QuizService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(QuizService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=quiz.service.spec.js.map