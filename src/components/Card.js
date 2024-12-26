import styled from "styled-components";

function Card({ person }) {
  const name = person.name?.first + " " + person.name?.last;
  const email = person.email;
  const phone = person.phone;
  const dob = person.dob?.date;
  const city = person.location?.city;
  const imgUrl = person.picture?.large;
  return (
    <Wrapper>
      <img src={imgUrl} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>
          <strong>Email:</strong> <Email>{email}</Email>
        </p>
        <p>
          <strong>Phone:</strong> {phone}
        </p>
        <p>
          <strong>DOB:</strong> {dob}
        </p>
        <p>
          <strong>City:</strong> {city}
        </p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: aliceblue;
  width: 300px;
  border-radius: 0 10px 0 10px;
  img {
    border-radius: 0 10px 0 0;
  }

  div {
    padding: 1rem;
  }
  @media (min-width: 768px) {
    aspect-ratio: 19/9;
    width: 100%;
    flex-direction: row;
    width: 400px;
    border-radius: 0 10px 0 10px;
    img {
      border-radius: 0 0 0 10px;
    }
    h3 {
      margin: 0;
    }
    p {
      margin: 0;
    }
  }
`;

const Email = styled.span`
  display: inline-block;
  max-width: 180px; /* Adjust based on your layout */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: middle;
`;

export default Card;
