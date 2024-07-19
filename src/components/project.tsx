import Image from "next/image";
import Link from "next/link";
import { TdesignLogoGithubFilled } from "./icons/github";
import { MdiWeb } from "./icons/web";
type Props = {
  name: string;
  description: string;
  github?: string;
  website?: string;
  imageUrl?: any;
};

export default function Project(props: Props) {
  return (
    <div className="border-2 border-background p-4 rounded-sm flex items-center">
      <div className="flex-1 ml-4">
        <div className="text-xl font-semibold text-primary">{props.name}</div>
        <p className="mt-2 text-secondary">{props.description}</p>
        <div className="mt-2 flex space-x-4">
          {props.github && (
            <Link href={props.github}>
              <TdesignLogoGithubFilled className="size-6 text-accent " />
            </Link>
          )}

          {props.website && (
            <Link href={props.website}>
              <MdiWeb className="size-6 text-accent " />
            </Link>
          )}
        </div>
      </div>
      {props.imageUrl && (
        <div className="w-30 h-30">
          <Image
            className="rounded-lg object-cover"
            src={props.imageUrl}
            alt={props.name}
            width={100}
            height={100}
          />
        </div>
      )}
    </div>
  );
}
