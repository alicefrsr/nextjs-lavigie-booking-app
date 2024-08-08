import Image from 'next/image';
import about1d from '@/public/img/about1-day.jpg';
import about1n from '@/public/img/about1-night.webp';

import { getCabins } from '@/app/_lib/data-service';

export const metadata = {
  title: 'A  propos',
};
// export const revalidate = 86400; // to update cabins once a day

export default async function AboutPage() {
  const cabins = await getCabins();
  return (
    <div className='grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center'>
      <div className='col-span-3'>
        <h1 className='text-4xl mb-10 text-accent-400 font-medium'>
          Bienvenue à la Vigie
        </h1>

        <div className='space-y-8'>
          <p>
            À la pointe occidentale de la Bretagne, la nature préservée offre un
            incroyable terrain de jeu et de découvertes. Entre l’Atlantique aux
            eaux turquoise et les mystérieuses landes bretonnes, la “Fin de la
            terre” – puisque c’est ce que le nom “Finistère” signifie – enchante
            les visiteurs.
          </p>
          <p>
            Explorez cette région magique au fil des sentiers de randonnée,
            perdez-vous dans les ruelles de Plougonvelin ou du Conquet, admirez
            les dolmens et menhirs de la presqu’île de Crozon… Naviguez sur la
            mer d’Iroise, à la découverte de l’archipel de Molène et observez la
            faune marine.
          </p>
          <p>Votre séjour à la Vigie vous promet des moments inoubliables..</p>
        </div>
      </div>

      <div className='col-span-2'>
        <Image
          src={about1d}
          alt='Wide shot of the cottage and lighthouse in daylight'
          // imported statically, no need for w + h
          placeholder='blur'
        />
      </div>

      <div className='relative aspect-square col-span-2'>
        <Image
          src={about1n}
          alt='Wide shot of the cottage and lighthouse on a starry night'
          // even if not imported stat. xx width/height xx bc we want responsive
          fill // have a container (so it only fills that container) with relative + size
          className='object-cover'
          // placeholder='blur' // can only use htis with statically imported images
        />
      </div>

      <div className='col-span-3'>
        <h1 className='text-4xl mb-10 text-accent-400 font-medium'>
          Une histoire familiale depuis 1946
        </h1>

        <div className='space-y-8'>
          <p>
            Construit par les Stevenson en 1857, la Vigie a été entièrement
            rénové et offre maintenant une maison confortable pour jusqu'à 15
            personnes à partir de laquelle profiter du cadre tranquille et de la
            faune abondante.
          </p>
          <p>
            Nous avons préservé l'essence de la Vigie, en mélangeant la beauté
            intemporelle de la mer avec la touche personnelle qu'une entreprise
            familiale peut offrir. Ici, vous n'êtes pas simplement un invité;
            vous faites partie de notre grande famille. Rejoignez-nous bientôt à
            la Vigie, où tradition rime avec tranquillité, et chaque visite est
            comme un retour à la maison."
          </p>
          <p>
            L'accès se fait par un sentier côtier, à 25 min à pied de Tobermory
            et il n'y a AUCUN accès aux véhicules. Le chalet est hors réseau,
            mais les panneaux solaires, un ressort et le WiFi signifient que
            vous ne le remarquerez probablement pas.
          </p>

          <div>
            <a
              href='/cabins'
              className='inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all'
            >
              Explore our luxury cabins
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
