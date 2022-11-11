import Image from 'next/image';

function ProfileIcon() {
    return (
        <div className="aspect-square h-12 relative p-0.5 border border-primary-light rounded-full">
            <div className="w-full h-full relative rounded-full overflow-hidden bg-primary-light">
                <Image src="https://avatars.dicebear.com/api/bottts/12.svg" alt="avatar" layout="fill" objectFit="cover" />
            </div>
        </div>
    );

  
}

export default ProfileIcon;
