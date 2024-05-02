import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";

interface Props {
  id: string;
  name: string;
  socialId: string;
  link: string;
}

const Member: React.FC<Props> = ({ id, name, socialId, link }) => (
  <div>
    <Image
      src={`/margelo-agency/assets/team/margelo_faces_${id}.svg`}
      alt={name}
      width={1366}
      height={1555}
    />
    <div className="text-2xl xl:text-3xl">{name}</div>
    <div className="text-xl">
      <Link href={link} target="_blank">
        {socialId}
      </Link>
    </div>
  </div>
);

export default Member;
