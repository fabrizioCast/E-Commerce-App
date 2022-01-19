import {
  FaqListItem,
  FaqList,
  FaqTitle,
  FaqWrapper,
  FaqListItemTitle,
  FaqListItemContent,
} from "./styles";

const FaqQuestions = [
  {
    question: "What is the difference between a FAQ and a FAQ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, dicta fugit recusandae vitae possimus iusto autem facilis maiores laboriosam odit deserunt mollitia magnam consectetur animi! Molestias aut recusandae dignissimos deserunt.",
  },
  {
    question: "What is the difference between a FAQ and a FAQ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, dicta fugit recusandae vitae possimus iusto autem facilis maiores laboriosam odit deserunt mollitia magnam consectetur animi! Molestias aut recusandae dignissimos deserunt.",
  },
  {
    question: "What is the difference between a FAQ and a FAQ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, dicta fugit recusandae vitae possimus iusto autem facilis maiores laboriosam odit deserunt mollitia magnam consectetur animi! Molestias aut recusandae dignissimos deserunt.",
  },
  {
    question: "What is the difference between a FAQ and a FAQ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, dicta fugit recusandae vitae possimus iusto autem facilis maiores laboriosam odit deserunt mollitia magnam consectetur animi! Molestias aut recusandae dignissimos deserunt.",
  },
];

const Faq = () => {
  return (
    <FaqWrapper>
      <FaqTitle>FAQ</FaqTitle>
      <FaqList>
        {FaqQuestions.map((question, index) => (
          <FaqListItem key={index}>
            <FaqListItemTitle>{question.question}</FaqListItemTitle>
            <FaqListItemContent>{question.answer}</FaqListItemContent>
          </FaqListItem>
        ))}
      </FaqList>
    </FaqWrapper>
  );
};

export default Faq;
