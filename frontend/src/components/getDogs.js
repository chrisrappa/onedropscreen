export default function getDogs(props) {

  const numDogs = props;

  const fetchDogs = async () =>  {
    let dogs = [];
    for(let i = 0; i < numDogs; i++){
      const dog = await (await fetch('https://dog.ceo/api/breeds/image/random')).json();
      dogs[i] = (dog.message);
    }

    console.log(dogs.length);
  }

  fetchDogs();

  return;
}
