import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import Image from "next/image";
import { FaTwitter, FaInstagram } from "react-icons/fa/";

function BossCard({ image, name, position, twitterUrl, instagramUrl }) {
  return (
    <div className="relative">
      <Card className="w-96">
        <CardHeader floated={false} className="h-80">
          <Image src={image} layout="fill" alt="profile-picture" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography
            variant="h4"
            color="blue-gray"
            className="mb-2 font-pixel"
          >
            {name}
          </Typography>
          <Typography
            className="font-medium font-pixel text-black"
            textGradient
          >
            {position}
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
          <div className={twitterUrl === "" ? "hidden" : "block"}>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href={twitterUrl}
                variant="lead"
                color="light-blue"
                textGradient
                target="_blank"
              >
                <FaTwitter className="text-blue-400 text-2xl" />
              </Typography>
            </Tooltip>
          </div>

          <div className={instagramUrl === "" ? "hidden" : "block"}>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href={instagramUrl}
                variant="lead"
                color="purple"
                textGradient
                target="_blank"
              >
                <FaInstagram className="text-black text-2xl" />
              </Typography>
            </Tooltip>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default BossCard;
