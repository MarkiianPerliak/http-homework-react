import { Component } from "react";
import styled from 'styled-components';


export class ImageGallery extends Component {
  state = {
    list: [],
    userOption: "",
    page: 1
  };

  getAPI = async (e) => {
    e.preventDefault();
    const userSelected = e.target.userselected.value;

    this.setState({ userOption: userSelected, page: 1 });

    const response = await fetch(
      `https://pixabay.com/api/?q=${userSelected}&page=1&key=54643473-04fd65ace3341df6262b4c56d&image_type=photo&orientation=horizontal&per_page=12`
    );
    const data = await response.json();

    this.setState({ list: data.hits });
  };

  loadMore = async () => {
    const { userOption, page, list } = this.state;
    const nextPage = page + 1;

    const response = await fetch(
      `https://pixabay.com/api/?q=${userOption}&page=${nextPage}&key=54643473-04fd65ace3341df6262b4c56d&image_type=photo&orientation=horizontal&per_page=12`
    );
    const data = await response.json();

    this.setState({
      list: [...list, ...data.hits],
      page: nextPage
    });
  };

  render() {
    return (
      <div className="Gallery">
        <Form onSubmit={this.getAPI}>
          <Input name="userselected" type="text" />
          <InpButton type="submit">Search</InpButton>
        </Form>

        <List>
          {this.state.list.map((item) => (
            <Item key={item.id}>
              <Image src={item.largeImageURL} alt={item.tags} />
            </Item>
          ))}
        </List>
            {this.state.list.length > 0 && (
          <WidthCont>
            
            <Button onClick={this.loadMore}>Load More</Button>
            
          </WidthCont>
)}
      </div>
    );
  }
}

const Form = styled.form`
      width: 100%;
  background-color: rgb(0, 149, 255);
    padding-top: 20px;
  padding-bottom: 20px;
`;

const Button = styled.button`
  color: black;
  background-color: white;
    border: 1px black solid;
  border-radius: 20px;
  font-size: 25px;
  padding: 9px;
    display: block;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
    list-style: none;
`;

const Item = styled.li`

`;

const WidthCont = styled.div`
  width: 100%;
  background-color: rgb(0, 149, 255);
  padding-top: 20px;
  padding-bottom: 20px;
`;

const Image = styled.img`
    width: 400px;
    height: 250px;
`;

const Input = styled.input`
  color: black;
  background-color: white;
    border: 1px black solid;
  border-radius: 20px;
  font-size: 25px;
  padding: 9px;
`;

const InpButton = styled.button`
  color: black;
  background-color: white;
    border: 1px black solid;
  border-radius: 20px;
  font-size: 25px;
  padding: 9px;
  cursor: pointer;
`;