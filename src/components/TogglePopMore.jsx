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
