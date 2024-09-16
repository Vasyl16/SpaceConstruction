import { swiperClientFeetbackLabel } from './swiperClientFitback';
import { swiperMainLabel } from './swiperMain';
import { setupSwiperOurEndedWork } from './swiperOurEndedWork';
import { swiperOurHistoryLabel } from './swiperOurHistory';
import { swiperOurProjectLabel } from './swiperOurProject';
import { setupSwiperOurTeam } from './swiperOurTeam';
import { swiperOurEndedProjectLabel } from './swiperOurEndedProject';

export const initAllSwipers = () => {
  swiperClientFeetbackLabel();
  swiperMainLabel();
  setupSwiperOurEndedWork();
  swiperOurHistoryLabel();
  swiperOurProjectLabel();
  setupSwiperOurTeam();
  swiperOurEndedProjectLabel();
};
