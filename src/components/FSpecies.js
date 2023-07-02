const FSpecies = (props) => {
    const handleSubmit = (ev) => {
      ev.preventDefault();
    };
    const handleChange = (ev) => {
      props.handleFSpecies(ev.target.value);
    };
  
    return (
      <section>
        <form onSubmit={handleSubmit}>
          <label htmlFor="species">Especie:</label>
          <select name="species" id="species" onChange={handleChange}>
            <option value="All">Todas</option>
            <option value="Human">Humano</option>
            <option value="Alien">Alien</option>
          </select>
        </form>
      </section>
    );
  };
  
  export default FSpecies;