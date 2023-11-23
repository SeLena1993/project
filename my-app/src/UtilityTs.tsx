import React from "react";

export const UtilityTs = () => {
  //1. Partial<T>
  interface IPerson {
    name: string;
    age: number;
  }

  const partialPerson: Partial<IPerson> = { name: "Anna" };

  const person: IPerson = {
    name: "John",
    age: 30,
  };

  //2.Readonly<T>

  interface ICar {
    brand: string;
    model: string;
  }

  const car: Readonly<ICar> = {
    brand: "Toyota",
    model: "Camry",
  };

  // car.brand = "Honda"

  //3. Pick<T, K>

  interface IBook {
    title: string;
    author: string;
    pagesCount: number;
  }

  const bookNabokov: IBook = {
    title: "Lolita",
    author: "Nabokov",
    pagesCount: 200,
  };

  const bookLem: Pick<IBook, "title" | "author"> = {
    title: "Soliaris",
    author: "Lem",
  };

  //4. Record<K, T>

  const carPrices: Record<string, number> = {
    Toyota: 25000,
    Honda: 23000,
    Ford: 27000,
    Lexus: 50000,
    BMW: 40000,
  };

  //5. Omit<T, K>

  interface IMovie {
    title: string;
    year: number;
    duration: number;
  }

  const movieMask: IMovie = {
    title: "Mask",
    year: 1990,
    duration: 120,
  };

  const movieOppengeimer: Omit<IMovie, "duration"> = {
    title: "Oppengeimer",
    year: 2023,
  };

  //6 Exclude<T, U>
  type Numbers = 1 | 2 | 3 | 4 | 5;
  type OddNumbers = Exclude<Numbers, 2 | 4>; //1|3|5

  //ReturnType<T>

  type MyFunction = () => string;

  type MyFunctionReturnType = ReturnType<MyFunction>; //string



  //7. Required<T>
  interface Configuraton {
    apiKey?: string;
    titleError: string;
  }

  const configuraton: Configuraton = {
    apiKey: "myApi",
    titleError: "error",
  };

  const serverConfiguraton: Required<Configuraton> = {
    apiKey: "myApi",
    titleError: "error",
  };
};

export default UtilityTs;
