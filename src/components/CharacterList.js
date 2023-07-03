import Characters from "./Characters.js";
import '../styles/layout/CharacterList.scss';


const CharacterList = ({ cartoons }) => {
  const cartoonElement = cartoons
    .sort((a, b) => {
      if (a.name.toLowerCase() === b.name.toLowerCase()) {
        return 0;
      }
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      }
      return 1;
    })
    .map((cartoon) => {
      return <Characters key={cartoon.id} cartoon={cartoon} />;
    });
  return (
    <section className="element_list">
      <ul >{cartoonElement}</ul>
    </section>
  );
};

export default CharacterList;