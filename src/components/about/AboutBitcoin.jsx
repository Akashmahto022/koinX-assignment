import React from "react";
import Section from "../section/Section";
import Card from "../cards/Card";

const AboutBitcoin = () => {
  return (
    <div className="mt-6 font-sans	font-semibold text-gray-700 text-[18px]">
      <div className="w-[850px] max-sm:w-[340px]">
        <Section heading={"About Bitcoin"}>
          <div className="py-4">
            <h1 className="text-black pb-2 font-bold">What is Bitcoin?</h1>
            <p className="font-sans	font-semibold text-gray-700 text-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio, repellat optio, atque temporibus consequuntur, ad
              praesentium non eaque tempore magnam labore. Accusantium ipsam
              officia beatae, natus aliquam nisi nesciunt unde.
            </p>
          </div>
          <hr />
          <div className="py-4">
            <h1 className="text-black pb-2 font-bold">
              Lorem ipsum dolor sit.
            </h1>
            <p className="font-sans	font-semibold text-gray-700 text-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio, repellat optio, atque temporibus consequuntur, ad
              praesentium non eaque tempore magnam labore. Accusantium ipsam
              officia beatae, natus aliquam nisi nesciunt unde. Lorem ipsum
              dolor sit. amet consectetur adipisicing elit. Vero dolor,
              veritatis quia animi, quam quos tempore rem sint dolorum nihil
              autem quasi sapiente! Quasi excepturi aspernatur voluptates,
              perferendis necessitatibus iure fugit laborum deleniti minima
              velit, maxime, rerum aliquam enim amet temporibus quod incidunt
              itaque omnis cum. Ipsam, saepe architecto! Similique
              exercitationem possimus quisquam illo in rem, rerum accusantium
              modi incidunt est cumque voluptatum quis dolores eveniet deserunt!
              Atque ab explicabo, maiores sequi quam modi ipsam quaerat odit eos
              delectus accusamus reprehenderit ex. Vitae commodi dolorem,
              voluptatum ipsam odit quibusdam recusandae ducimus assumenda et
              praesentium non tenetur quae suscipit, maiores totam modi illo
              debitis. Illo consequuntur, autem nihil impedit quam repudiandae
              laboriosam sit sint, ipsum quasi rem eligendi eaque culpa dicta.
            </p>
          </div>
          <hr />
          <div className="py-4">
            <h1 className="text-black pb-4 font-bold text-xl">
              Already Holding Bitcoin
            </h1>
            <div className="flex gap-8 max-sm:block ">
              <Card
                bgColor={"bg-gradient-to-l from-blue-700 to-green-400"}
                image={"https://images.pexels.com/photos/6801647/pexels-photo-6801647.jpeg?auto=compress&cs=tinysrgb&w=600"}
                title={"Calculate your Profits"}
                btnName={"Check Now"}
                className={'max-sm:my-6'}
              />
              <span className="max-sm:my-[12px]"></span>
              <Card
                bgColor={"bg-gradient-to-l from-red-700 to-orange-400"}
                image={"https://images.pexels.com/photos/6801650/pexels-photo-6801650.jpeg?auto=compress&cs=tinysrgb&w=600"}
                title={"Calculate your Profits"}
                btnName={"Check Now"}
              />
            </div>
          </div>
          <hr />
          <div className="py-4">
            <p className="font-sans	font-semibold text-gray-700 text-[18px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
              odio, exercitationem voluptate distinctio corporis dignissimos
              quam omnis veniam architecto at deserunt sunt eos? Non dolorum
              dolores, iste fugit voluptatem distinctio soluta cum, quod numquam
              illo rerum. Dolores vel fugiat sequi placeat nemo ex commodi unde
              dolorum nisi necessitatibus? Harum, fugiat.
            </p>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default AboutBitcoin;
