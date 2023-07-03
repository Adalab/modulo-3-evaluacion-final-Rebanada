import FSpecies from "../components/FSpecies.js";
import FName from "../components/FName.js";


const Filters = (props) => {
  
  return (
    <>
      <FName handleFName={props.handleFName} filterName={props.filterName} />
      <FSpecies handleFSpecies={props.handleFSpecies} />
      
    </>
  );
};

export default Filters;