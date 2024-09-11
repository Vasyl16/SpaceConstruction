import { swiperClientFeetbackLabel } from './swiperClientFitback';
import { swiperMainLabel } from './swiperMain';
import { setupSwiperOurEndedWork } from './swiperOurEndedWork';
import { swiperOurHistoryLabel } from './swiperOurHistory';
import { swiperOurProjectLabel } from './swiperOurProject';
import { swiperThumbnailOurEndedProjectLabel } from './swiperThumbnailOurEndedProject';
import { setupSwiperOurTeam } from './swiperOurTeam';

export const initAllSwipers = () => {
  swiperClientFeetbackLabel();
  swiperMainLabel();
  setupSwiperOurEndedWork();
  swiperOurHistoryLabel();
  swiperOurProjectLabel();
  swiperThumbnailOurEndedProjectLabel();
  setupSwiperOurTeam();
};
