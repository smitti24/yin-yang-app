import React from "react";
import BossCard from "./BossCard";

function TheGang() {
  return (
    <div name="gang" className="max-w-[1240px] mx-auto px-4 py-16">
      <div className="flex w-full justify-center text-5xl font-default mb-20 text-white md:text-[5rem] font-extrabold">
        The Gang
      </div>
      <div className="grid justify-center lg:grid-cols-3 gap-4 ">
        <BossCard
          image="/nomad.gif"
          name="@Nomad"
          position="Boss"
          twitterUrl="https://twitter.com/Nomad_eth"
          instagramUrl=""
        />
        <BossCard
          image="/manos.png"
          name="Manosdepapel"
          position="Boss"
          twitterUrl="https://twitter.com/manos_de_papel_"
          instagramUrl=""
        />
        <BossCard
          image="/KryptoPal.png"
          name="KryptoPal"
          position="Boss"
          twitterUrl="https://twitter.com/KryptoPal_"
          instagramUrl=""
        />
        <BossCard
          image="/maison.gif"
          name="Maison Ghost"
          position="Core Team"
          twitterUrl="https://twitter.com/MaisonGhost"
          instagramUrl="http://instagram.com/lamarmahmuzic"
        />
        <BossCard
          image="/hato.gif"
          name="Hato"
          position="Redacted"
          twitterUrl="https://twitter.com/HatoETH"
          instagramUrl=""
        />
      </div>
    </div>
  );
}

export default TheGang;
