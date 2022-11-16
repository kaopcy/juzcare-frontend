import Image from 'next/image';

function ProfileIconReport() {
   return (
      <div className="relative h-full w-full overflow-hidden rounded-full bg-primary-light">
         <Image src="https://avatars.dicebear.com/api/bottts/12.svg" alt="avatar" layout="fill" objectFit="cover" />
      </div>
   );
}
export default ProfileIconReport;
