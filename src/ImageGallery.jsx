// import { Component } from "react";
// import styled from 'styled-components';


// export class ImageGallery extends Component {
//   state = {
//     list: [],
//     updateList: [],
//     userOption: "",
//     page: 1,
//     showButton: false
//   };

//   componentDidMount() {

//   }

//   async componentDidUpdate() {
//     // this.getAPI()

//     // if (data.hits.length === this.state.list.length) {
//     //   await this.setState({ showButton: false })
//     //   console.log(this.state.showButton)
//     //   console.log(data.hits.length)
//     //   console.log(this.state.list.length)
//     // } else {
//     //   await this.setState({ showButton: true })
//     //   console.log(this.state.showButton)
//     //   console.log(data.hits.length)
//     //   console.log(this.state.list.length)
//     // }
//   }

//   getAPI = async (e) => {
//     e.preventDefault();
//     const userSelected = e.target.userselected.value;



//     this.setState({ userOption: userSelected, page: 1 });

//     const response = await fetch(
//       `https://pixabay.com/api/?q=${userSelected}&page=1&key=54643473-04fd65ace3341df6262b4c56d&image_type=photo&orientation=horizontal&per_page=12`
//     ).then((result) => result.json()).then((resultdata) => {
//       console.log(resultdata)
//       this.setState({ list: resultdata.hits });

//       return resultdata.hits
//     }).then(newresult => {
//       console.log(newresult, this.state.list)
//       if (newresult.length === this.state.list.length) {
//         this.setState({ showButton: false })
//       } else {
//         this.setState({ showButton: true })
//         console.log(this.state.showButton)
//         console.log(newresult.length)
//         console.log(this.state.list.length)
//       }
//     });
//     // const data = await response.json();

//     // if (this.state.list.length === data.hits.length) {
//     //   this.setState({ showButton: true })
//     // } else {
//     //   this.setState({ showButton: false })
//     // }
//   };

//   // checkShowButton = async () => {
//   //   await this.getAPI()
//   //   if (data.hits.length === this.state.list.length) {
//   //     await this.setState({ showButton: false })
//   //     console.log(this.state.showButton)
//   //     console.log(data.hits.length)
//   //     console.log(this.state.list.length)
//   //   } else {
//   //     await this.setState({ showButton: true })
//   //     console.log(this.state.showButton)
//   //     console.log(data.hits.length)
//   //     console.log(this.state.list.length)
//   //   }
//   // }

//   loadMore = async () => {
//     const { userOption, page, list } = this.state;
//     const nextPage = page + 1;

//     // const response = await fetch(
//     //   `https://pixabay.com/api/?q=${userOption}&page=${nextPage}&key=54643473-04fd65ace3341df6262b4c56d&image_type=photo&orientation=horizontal&per_page=12`
//     // );
//     // const data = await response.json();

//     // this.setState(prevState => {
//     //   console.log(prevState)
//     //   if (data.hits.length === prevState.list.length) {
//     //     this.setState({ updateList: data. })
//     //     console.log(data.hits.length === prevState.list.length)
//     //   } else {
//     //     this.setState({ showButton: true })
//     //   }

//     //   return {
//     // list: [...list, ...data.hits],
//     // page: nextPage
//     //   }
//     // });

//     const response = await fetch(
//       `https://pixabay.com/api/?q=${userOption}&page=${nextPage}&key=54643473-04fd65ace3341df6262b4c56d&image_type=photo&orientation=horizontal&per_page=12`
//     ).then((result) => result.json()).then((resultdata) => {
//       this.setState({
//         list: [...list, ...resultdata.hits],
//         page: nextPage
//       });

//       return resultdata.hits
//     }).then(newresult => {
//       console.log(newresult, this.state.list)
//       if (newresult.length === this.state.list.length) {
//         this.setState({ showButton: false })
//       } else {
//         this.setState({ showButton: true })
//       }
//     });
//   };

//   render() {
//     return (
//       <div className="Gallery">
//         <Form onSubmit={this.getAPI}>
//           <Input name="userselected" type="text" />
//           <InpButton type="submit">Search</InpButton>
//         </Form>

//         <List>
//           {this.state.list?.map((item) => (
//             <Item key={item.id}>
//               <Image src={item.largeImageURL} alt={item.tags} />
//             </Item>
//           ))}
//         </List>
//         {console.log(this.state.updateList, this.state.list)}
//         {this.state.updateList !== this.state.list && <WidthCont><Button onClick={this.loadMore}>Load More</Button></WidthCont>}
//       </div>
//     );
//   }
// }

// const Form = styled.form`
//       width: 100%;
//   background-color: rgb(0, 149, 255);
//     padding-top: 20px;
//   padding-bottom: 20px;
// `;

// const Button = styled.button`
//   color: black;
//   background-color: white;
//     border: 1px black solid;
//   border-radius: 20px;
//   font-size: 25px;
//   padding: 9px;
//     display: block;
//   margin-left: auto;
//   margin-right: auto;
//   cursor: pointer;
// `;

// const List = styled.ul`
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
//   gap: 30px;
//     list-style: none;
// `;

// const Item = styled.li`

// `;

// const WidthCont = styled.div`
//   width: 100%;
//   background-color: rgb(0, 149, 255);
//   padding-top: 20px;
//   padding-bottom: 20px;
// `;

// const Image = styled.img`
//     width: 400px;
//     height: 250px;
// `;

// const Input = styled.input`
//   color: black;
//   background-color: white;
//     border: 1px black solid;
//   border-radius: 20px;
//   font-size: 25px;
//   padding: 9px;
// `;

// const InpButton = styled.button`
//   color: black;
//   background-color: white;
//     border: 1px black solid;
//   border-radius: 20px;
//   font-size: 25px;
//   padding: 9px;
//   cursor: pointer;
// `;


import { Component } from "react";
import styled from 'styled-components';


export class ImageGallery extends Component {
  state = {
    list: [],
    userOption: "",
    showButton: false,
    page: 1
  };

  componentDidUpdate () {
    console.log(this.state.showButton)
  }

  getAPI = async (e) => {
    e.preventDefault();
    const userSelected = e.target.userselected.value;

    this.setState({ userOption: userSelected, page: 1 });

    const response = await fetch(
      `https://pixabay.com/api/?q=${userSelected}&page=1&key=54643473-04fd65ace3341df6262b4c56d&image_type=photo&orientation=horizontal&per_page=12`
    );
    const data = await response.json();
    console.log(data)
    
    this.setState(() => {
        if (data.hits.length === 12 && data.totalHits > 12) {
            this.setState({ showButton: true })
        } else {
            this.setState({ showButton: false })
        }
        return {
            list: data.hits
        }
    });
  };

  loadMore = async () => {
    const { userOption, page, list } = this.state;
    const nextPage = page + 1;

    const response = await fetch(
      `https://pixabay.com/api/?q=${userOption}&page=${nextPage}&key=54643473-04fd65ace3341df6262b4c56d&image_type=photo&orientation=horizontal&per_page=12`
    );
    const data = await response.json();

    this.setState(() => {
        if (data.hits.length === 12) {
            this.setState({ showButton: true })
        } else {
            this.setState({ showButton: false })
        }
        return {
            list: [...list, ...data.hits],
            page: nextPage
        }
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
            {this.state.showButton === true && <WidthCont><Button onClick={this.loadMore}>Load More</Button></WidthCont>}
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