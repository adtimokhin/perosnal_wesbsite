import { useEffect, useState } from "react";

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function LetterLine({ letters }) {
  // Letters come in as one string of characters

  //   FIXME: Shuffling animation does not work!
  const [shuffleData, setShuffleData] = useState({
    shuffleStart: 0,
    shuffleEnd: letters.length - 1,
    shuffleStartArray: [],
    shuffleEndArray: [],
  });
  const [currentI, setCurrentI] = useState(0);

  //   Making the two arrays for the first and last letters.
  useEffect(() => {
    const lettersLength = letters.length;

    const firstIndex = currentI;
    const lastIndex = lettersLength - 1 - currentI;

    const arrayOne = Array.from(
      { length: lettersLength - 2 },
      (_, index) => index + 1
    );

    shuffle(arrayOne);

    let arrayTwo = [];

    for (let i = arrayOne.length - 1; i >= 0; i--) {
      arrayTwo.push(arrayOne[i]);
    }

    if (arrayTwo.length % 2 != 0) {
      let temp = arrayTwo[0];
      arrayTwo[0] = arrayTwo[(arrayTwo.length - 1) / 2];
      arrayTwo[(arrayTwo.length - 1) / 2] = temp;
    }

    setShuffleData({
      shuffleStart: firstIndex,
      shuffleEnd: lastIndex,
      shuffleStartArray: arrayOne,
      shuffleEndArray: arrayTwo,
    });
  }, []);

  function getLetter(index) {
    if (index == shuffleData.shuffleStart)
      return (
        <img
          src={`/alphabet/LETTER ${
            letters[shuffleData.shuffleStartArray[currentI]]
          }.svg`}
          draggable={false}
        />
      );

    if (index == shuffleData.shuffleEnd) {
      return (
        <img
          src={`/alphabet/LETTER ${
            letters[shuffleData.shuffleEndArray[currentI]]
          }.svg`}
          draggable={false}
        />
      );
    }

    if (index == shuffleData.shuffleStartArray[currentI])
      return (
        <img
          src={`/alphabet/LETTER ${letters[shuffleData.shuffleStart]}.svg`}
          draggable={false}
        />
      );

    if (index == shuffleData.shuffleEndArray[currentI])
      return (
        <img
          src={`/alphabet/LETTER ${letters[shuffleData.shuffleEnd]}.svg`}
          draggable={false}
        />
      );

    return (
      <img src={`/alphabet/LETTER ${letters[index]}.svg`} draggable={false} />
    );
  }

  return (
    <div className="flex justify-between">
      {letters.split("").map((letter, index) => getLetter(index))}
    </div>
  );
}

export default LetterLine;
