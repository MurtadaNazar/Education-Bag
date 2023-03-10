import Head from "next/head";
import { Inter } from "@next/font/google";

//import { createClient } from "next-sanity";
// const client = createClient({
//   projectId: "gmgpk72i",
//   dataset: "production",
//   apiVersion: "2022-03-25",
//   useCdn: false,
// });

const inter = Inter({ subsets: ["latin"] });

export default function Home({ pets }) {
  // console.log(pets);
  return (
    <>
      <Head>
        <title>المهندس ايمن سعد</title>
        <meta name="description" content="مرحبا بك في موقع المهندس ايمن سعد" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <div className="py-20 text-white bg-black">
          <div className="container flex flex-col items-center mx-auto my-12 md:flex-row md:my-24">
            <div className="flex flex-col items-start justify-center w-full p-8 lg:w-1/3">
              <h1 className="p-2 text-3xl text-yellow-300 md:text-5xl tracking-loose">
                المهندس
              </h1>
              <h2 className="mb-2 text-3xl leading-relaxed md:text-5xl md:leading-snug">
                ايمن سعد القرغولي
              </h2>
              <p className="mb-4 text-sm md:text-base text-gray-50">
                محتوانة عفاط وكفر اذا ميعجبك لا تابعني
              </p>
              <a
                href="#"
                className="px-4 py-2 text-yellow-300 bg-transparent border border-yellow-300 rounded shadow hover:bg-yellow-300 hover:text-black hover:shadow-lg hover:border-transparent"
              >
                Explore Now
              </a>
            </div>
            <div className="justify-center p-8 mt-12 mb-6 ml-0 md:mb-0 md:mt-0 md:ml-12 lg:w-2/3">
              <div className="flex flex-wrap content-center h-48">
                <div>
                  <img
                    className="hidden inline-block mt-28 xl:block"
                    src="https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png"
                  />
                </div>
                <div>
                  <img
                    className="inline-block p-8 mt-24 md:mt-0 md:p-0"
                    src="https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png"
                  />
                </div>
                <div>
                  <img
                    className="hidden inline-block mt-28 lg:block"
                    src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    //   <main classNameNameNameNameName="mn">
    //     <h2>الكتب المترجمة</h2>
    //     {pets.length > 0 && (
    //       <ul>
    //         {pets.map((pet) => (
    //           <li key={pet._id}>{pet?.name}</li>
    //         ))}
    //       </ul>
    //     )}
    //   </main>
    // </>
  );
}

// export async function getServerSideProps() {
//   const pets = await client.fetch(`*[_type == "pet"]`);
//   return {
//     props: {
//       pets,
//     },
//   };
// }
