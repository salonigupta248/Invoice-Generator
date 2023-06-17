import React from "react";

export default function Notes({ Notes }) {
  return (
    <>
      <section className=" mt-10 mb-5 lg:w-1/2 text-justify">
        <p>{Notes}</p>
      </section>
    </>
  );
}
