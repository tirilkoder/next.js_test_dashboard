import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { PuzzlePieceIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaceSmileIcon } from '@heroicons/react/24/outline';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      {/* <FontAwesomeIcon icon={faStrawberry} style={{ color: '#ff513d' }} /> */}
      <FaceSmileIcon className="h-12 w-12" />
      {/* <PuzzlePieceIcon className="h-12 w-12 rotate-[15deg]" /> */}
      <p className="text-[44px]">Test</p>
    </div>
  );
}
