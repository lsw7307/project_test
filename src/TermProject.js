import React, { Component } from "react";
import { random } from "lodash";
// import Modal from "react-modal";
//import { Modal } from "./Modal";
import Empty_cart from "./cloths/Empty_cart.jpg";
import cloth01 from "./cloths/c1.png";
import cloth02 from "./cloths/c2.png";
import cloth03 from "./cloths/c3.png";
import cloth04 from "./cloths/c4.png";
import cloth05 from "./cloths/c5.png";
import cloth06 from "./cloths/c6.png";
import "./App.css";

class TermProject extends Component {
  clothList = [
    cloth01,
    cloth02,
    cloth03,
    cloth04,
    cloth05,
    cloth06,
   
  ];
  price = [34, 135, 64, 9, 47, 83]; //초반 상품 10개 가격 초기화

  constructor(props) {
    super(props);
    this.state = {
      list: this.clothList,
      price: this.price,
      randomNumber: 0, //가격 랜덤숫자 선언
      // modalOpen: false,
      // count: this.props.count,
    };

    this.ref = React.createRef();

    this.setRef = this.setRef.bind(this);
    this.checkPosition = this.checkPosition.bind(this);
    window.addEventListener("scroll", this.checkPosition);

    this.handleButtonClick = this.handleButtonClick.bind(this); //버튼 핸들러 바인드
  }
  setRef(ref) {
    this.ref = ref;
  }

  checkPosition() {
    const randomNumber = random(30, 100); //최소 30,000원에서 100,000원 가격
    let i = 0;
    if (this.ref && typeof this.ref.getBoundingClientRect === "function") {
      if (this.ref.getBoundingClientRect().top < window.innerHeight) {
        i = i++;
        this.setState(({ list, price }) => ({
          //state변수중 list만 꺼내라
          list: [...list, this.clothList[Math.floor(Math.random() * 6)]], //앞에 10개, list를 바꿔라
          price: [...price, randomNumber], //랜덤숫자 삽입
        }));
        console.log(i);
      }
    } else {
      console.log("exit");
    }
  } //checkPosition

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" }); // 최상단으로 스크롤 이동
  }

  // openModal = () => {
  //   this.setState({ modalOpen: true });
  // };
  // closeModal = () => {
  //   this.setState({ modalOpen: false });
  // };

  handleButtonClick() {
    //부모컴포넌트 숫자추가 함수 호출
    this.props.onAdd();
  }

  render() {
    let { count } = this.props; //부모컴포로부터 값 받기
    return (
      <>
        <div className="flex_container">
          <div className="menu">
            {/* 카트 이미지 클릭시 숫자 증가 // 차후 상품 팝업시 증가로 변경 요망 */}
         
            <h1>SHOPPER</h1>
            <h1>SHOP v7.3</h1>
            <p>Login Join MyPage</p>
            <h5>NEW</h5>
            <h5>Selected</h5>
            <h5>Men's</h5>
            <h5>Women's</h5>
               
            <button id="scrollToTop" onClick={this.scrollToTop}></button>
          </div>
          <ul className="main_scroll" id="main">
              <a id="Empty_cart" onClick={this.handleButtonClick}>
              <img id="cart" src={Empty_cart}></img>
              {count}
            </a>

            <br />

            {this.state.list.map((todo, i) => (
              <article>
                <li className="list" key={todo + i}>
                  <img src={todo} alt={`상의${i + 1}`} width="300" />
                  <br />
                  상의{i + 1}
                  <br />
                  가격:{this.state.price[i]},000₩
                </li>
              </article>
            ))}
          </ul>
          {/* //bootstrap CSS
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
            crossorigin="anonymous"
          ></link>; */}
          <div id="ref" ref={this.setRef}>
            {" "}
            The End
          </div>
          {/* /ref */}
        </div>
        //flex_container
      </>
    );
  }
}

export default TermProject;