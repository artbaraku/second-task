// // import { useState } from "react";
// // import ArrowUp from '../assets/icons/arrow_up.png';
// // import ArrowDown from '../assets/icons/arrow-down.png';
// // import User1 from '../assets/icons/userl.png';



// // const TogglePopMore = () => {
// //     const [show, setShow] = useState(false);
  
// //     const [pop1, setPop1] = useState(false);
// //     const [pop2, setPop2] = useState(false);
// //     const [pop3, setPop3] = useState(false);
// //     const [pop4, setPop4] = useState(false);
  
// //     const stopPropagation = (e) => {
// //       e.stopPropagation();
// //     };
// //     return (
// //       <div className="second-popup">
// //         <div className="question__container" onClick={() => setShow(!show)}>
// //           <div className="inner__container">
// //             <div className="left__side">
// //               <span>
// //                 <User1/>
// //               </span>
  
// //               <div className="main__heading">
// //                 <p>About Us</p>
// //                 <p className="description">4 articles in this Topic</p>
// //               </div>
// //             </div>
// //             <span className="arrow">
// //               {show ? <ArrowUp/> : <ArrowDown />}
// //             </span>
// //           </div>
// //           {show && (
// //             <div className="popup-container">
// //               <div
// //                 className="popup-row"
// //                 onClick={(e) => {
// //                   stopPropagation(e), setPop1(!pop1);
// //                 }}
// //               >
// //                 <div className="popup_top">
// //                   <p>
// //                     How does Parkname seperate itself from other domain name
// //                     parking companies?
// //                   </p>
// //                   <span className="popup_span">
// //                     {pop1 ? <ArrowUp /> : <ArrowDown />}
// //                   </span>
// //                 </div>
// //                 {pop1 && (
// //                   <div className="popup_down">
// //                     <p className="down_text">
// //                       Your domains are a valuable online property. As in any
// //                       investment, you want the most efficient easy way to make
// //                       sure your property is going to be profitable. Do you own
// //                       more than 1,000 domain ? As a professional domainer, you
// //                       will find everything you need through Parkname to generate
// //                       maximum profits from your domain portfolio.
// //                     </p>
// //                   </div>
// //                 )}
// //               </div>
// //               <div
// //                 className="popup-row"
// //                 onClick={(e) => {
// //                   stopPropagation(e), setPop2(!pop2);
// //                 }}
// //               >
// //                 <div className="popup_top">
// //                   <p>Is parkname actually free?</p>
// //                   <span className="popup_span">
// //                     {pop2 ? <ArrowUp /> : <ArrowDown />}
// //                   </span>
// //                 </div>
// //                 {pop2 && (
// //                   <div className="popup_down">
// //                     <p className="down_text">
// //                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
// //                       Illo repudiandae aut nostrum totam autem, quos sed
// //                       obcaecati, accusantium molestias provident, quaerat
// //                       consequuntur? Quia autem fuga numquam excepturi tenetur? Ab,
// //                       dignissimos exercitationem quaerat facere optio beatae
// //                       adipisci? Et atque a, enim corrupti porro cumque natus ipsam
// //                       ipsa dolores quam dolorum dolorem!
// //                     </p>
// //                   </div>
// //                 )}
// //               </div>
// //               <div
// //                 className="popup-row"
// //                 onClick={(e) => {
// //                   stopPropagation(e), setPop3(!pop3);
// //                 }}
// //               >
// //                 <div className="popup_top">
// //                   <p>What you do?</p>
// //                   <span className="popup_span">
// //                     {pop3 ? <ArrowUp /> : <ArrowDown />}
// //                   </span>
// //                 </div>
// //                 {pop3 && (
// //                   <div className="popup_down">
// //                     <p className="down_text">
// //                       Lorem ipsum dolor, sit amet consectetur adipisicing elit.
// //                       Tenetur voluptate adipisci corporis animi ex commodi
// //                       quibusdam, consequatur cum? Dicta voluptas nesciunt eius
// //                       doloribus eaque, sunt rerum minima suscipit voluptates ex.
// //                     </p>
// //                   </div>
// //                 )}
// //               </div>
// //               <div className="popup-row" onClick={(e) => {stopPropagation(e),setPop4(!pop4)}}>
// //                 <div className="popup_top">
// //                   <p>When was Parkname first founded</p>
// //                   <span className="popup_span">
// //                     {pop4 ? <ArrowUp /> : <ArrowDown /> }
// //                   </span>
// //                 </div>
// //                 {pop4 && <div className="popup_down">
// //                   <p className="down_text">
// //                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
// //                     Dolorum, voluptatibus? Inventore consequuntur sapiente aliquid
// //                     cupiditate rerum animi, sunt dicta? Commodi recusandae
// //                     praesentium consequatur rem blanditiis.
// //                   </p>
// //                 </div> }
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     );
// //   };
  
// //   export default TogglePopMore;

// import { useState } from "react";
// import ArrowUp from "../assets/icons/arrow_up.png";
// import ArrowDown from "../assets/icons/arrow-down.png";
// import User1 from "../assets/icons/userl.png";


// // const Popup = ({ question, answer, isOpen, toggle }) => (

// //     const {question, answer, isOpen, toggle} = PopUp 
// //   <div className="popup-row" onClick={toggle}>
// //     <div className="popup_top">
// //       <p>{question}</p>
// //       <span className="popup_span">
// //         {isOpen ? <ArrowUp /> : <ArrowDown />}
// //       </span>
// //     </div>
// //     {isOpen && (
// //       <div className="popup_down">
// //         <p className="down_text">{answer}</p>
// //       </div>
// //     )}
// //   </div>
// // //  );   

// const TogglePopMore = () => {
//   const [show, setShow] = useState(false);

//   const [popups, setPopups] = useState([
//     {
//       id: 1,
//       question: "How does Parkname separate itself from other domain name parking companies?",
//       answer:
//         "Your domains are a valuable online property. As in any investment, you want the most efficient easy way to make sure your property is going to be profitable. Do you own more than 1,000 domains? As a professional domainer, you will find everything you need through Parkname to generate maximum profits from your domain portfolio.",
//       isOpen: false,
//     },
//     {
//       id: 2,
//       question: "Is Parkname actually free?",
//       answer:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum lectus et maximus maximus. Ut scelerisque sit amet turpis at gravida. Morbi vel odio porttitor, egestas justo quis, aliquet odio.",
//       isOpen: false,
//     },
//     {
//       id: 3,
//       question: "What do you do?",
//       answer:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum lectus et maximus maximus. Ut scelerisque sit amet turpis at gravida. Morbi vel odio porttitor, egestas justo quis, aliquet odio.",
//       isOpen: false,
//     },
//     {
//       id: 4,
//       question: "When was Parkname first founded?",
//       answer:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptatibus? Inventore consequuntur sapiente aliquid cupiditate rerum animi, sunt dicta? Commodi recusandae praesentium consequatur rem blanditiis.",
//       isOpen: false,
//     },
//   ]);

//   const togglePopup = (id) => {
//     setPopups((popups) =>
//       popups.map((popup) =>
//         popup.id === id ? { ...popup, isOpen: !popup.isOpen } : popup
//       )
//     );
//   };

//   const stopPropagation = (e) => {
//     e.stopPropagation();
//   };

//   return (
//     <div className="second-popup">
//       <div className="question__container" onClick={() => setShow(!show)}>
//         <div className="inner__container">
//           <div className="left__side">
//             <span>
//               <User1 />
//             </span>
//             <div className="main__heading">
//               <p>About Us</p>
//               <p className="description">4 articles in this Topic</p>
//             </div>
//           </div>
//           <span className="arrow">{show ? <ArrowUp /> : <ArrowDown />}</span>
//         </div>
//         {show && (
//           <div className="popup-container">
//             {popups.map((popup) => (
//               <PopUp
//                 key={popup.id}
//                 question={popup.question}
//                 answer={popup.answer}
//                 isOpen={popup.isOpen}
//                 toggle={(e) => {
//                   stopPropagation(e);
//                   togglePopup(popup.id);
//                 }}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TogglePopMore;


import { useState } from "react";
import icon1 from "../assets/icons/userl.png"
  
  const TogglePopMore = () => {
  const [Faq, setFaq] = useState(null);
  const [SubFaq, setSubFaq] = useState(null);

  const questions = [
    {
      id: 1,
      icon: icon1,
      title: "About Us",
      text: "4 articles in this Topic",
      subquestions: [
        {
          id: 2,
          title: "How does Parkname seperate itself from other domain parking companies?",
          answer:
            "Sunt in culpa qui officia deserunt mollit anim id est laborum..",
        },
        {
          id: 3,
          title: "Is Parkname Parkig actually free?",
          answer:
            "Excepteur sint occaecat cupidatat non proident.",
            
        },
        {
          id: 3,
          title: "What you do?",
          answer:
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: 3,
          title: "When was Parkname first founded?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
      ],
    },
  ];

  const toggleQuestion = (i) => {
    if (Faq === i) {
      setFaq(null);
    } else {
      setFaq(i);
    }
  };

  const toggleSubquestion = (i) => {
    if (SubFaq === i) {
      setSubFaq(null);
    } else {
      setSubFaq(i);
    }
  };

  return (
    <div className="faq">
        {questions.map((o, k) => (
          <div key={o.id} className="faq-content">
              <h4 onClick={() => toggleQuestion(k)}>
                <div className="title-text">
                <span>{o.title}</span>
               <span className="text">{o.text}</span>
                </div>
                <div className="faq-icon">{Faq === k ? "⌃" : "⌄"}</div>
              </h4>
            {Faq === k && (
              <div className="faq-answer">
                <p>{o.answer}</p>
                {o.subquestions.map((s, subIndex) => (
                  <div key={s.id} className="faq-dropdown">
                    <h5 onClick={() => toggleSubquestion(subIndex)}>

                      {s.title}
                    <div className="arrow">{SubFaq === subIndex ? "⌃" : "˃"}</div>
                    </h5>

                    <div className="footer">{SubFaq === subIndex && <p>{s.answer}</p>}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
  );
};

export default TogglePopMore;
