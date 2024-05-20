import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {styles} from './assets/BuyScreen'; // 스타일 임포트

const questions = [
  {
    id: 1,
    text: 'Do you feel pressured about making friends in a new environment?',
  },
  {
    id: 2,
    text: 'Can you understand and comfort a friend when they are sad?',
  },
  {
    id: 3,
    text: 'Do you find it difficult to cooperate with others in a team project?',
  },
  {id: 4, text: "Can you respect and accept other people's opinions?"},
  {id: 5, text: 'Is it hard for you to start a conversation with strangers?'},
  // {
  //   id: 6,
  //   text: 'Do you communicate well with your friends and express your thoughts?',
  // },
  // {id: 7, text: 'Can you comfortably talk with teachers or other adults?'},
  // {
  //   id: 8,
  //   text: 'Do you try to compromise or solve problems in conflict situations?',
  // },
  // {id: 9, text: "Can you sincerely celebrate someone else's success?"},
  // {id: 10, text: 'Can you appropriately express and manage your emotions?'},
  // {id: 11, text: 'Do you enjoy trying new activities or hobbies?'},
  // {
  //   id: 12,
  //   text: 'Can you build and maintain trust in relationships with others?',
  // },
  // {
  //   id: 13,
  //   text: 'Are you interested in helping or serving others?',
  // },
  // {id: 14, text: 'Can you respond constructively when criticized?'},
];

const Questionnaire = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // 현재 질문 인덱스
  const [answers, setAnswers] = useState([]); // 사용자의 답변을 저장
  const [recommendedQuest, setRecommendedQuest] = useState<string[]>([]);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [helpText, setHelpText] = useState<string[]>([]);
  const [selectedItems, setSelecedItems] = useState([]);

  const handleSelectScore = score => {
    // 현재 질문에 대한 점수 저장
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = score;
    setAnswers(newAnswers);

    // 다음 질문으로 넘어가기
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      // 모든 질문이 완료되면 결과 처리
      console.log('질문 완료:', newAnswers);
      // 총 점수 계산
      const totalScore = newAnswers.reduce((acc, current) => acc + current, 0);
      // 추천 활동 결정
      // let recommendedQuest;
      if (totalScore >= 1 && totalScore <= 50) {
        setRecommendedQuest([
          'Caring for Pets and Plants',
          'Family Cooking Time',
          'Picking up trash in a local park with family or friends.',
          'Participating in a book reading grou\np at the neighborhood library.',
          'Starting a gratitude letter writing project at school or within the community.',
        ]);
        setHelpText([
          'Encourage your child to learn a sense of shared responsibility by sharing the experiences that arise in the process of caring for something with the family.',
          'Engage in simple cooking or baking activities with the family, \nwhere the child can explain the cooking process or take on a role in helping.',
          'Celebrate small successes to boost confiden\nce.',
          'Exchange positive feedback in conversations with various people.',
          'Attempt small challenges to overcome the fea\nr of new environments.',
        ]);
        // } else if (totalScore >= 16 && totalScore <= 25) {
        //   setRecommendedQuest([
        //     'Organizing a small book exchange event at school or in the community.',
        //     'Participating in school or community events.',
        //     'Exploring nature with family or friends.',
        //     'Volunteering at a local animal shelter.',
        //     'Hosting an art exhibition for the community with friends.',
        //   ]);
        //   setHelpText([
        //     'Explore new perspectives by conversing with a variety of people.',
        //     'Encourage your child to communicate with other participants by participating in events organized by schools or the community.',
        //     'Explore nature parks or trails with family or friends, and share what you see and feel.',
        //     'Set small goals and cooperate with friends to achieve them.',
        //     'Choose activities based on your interests to develop greater passion.',
        //   ]);
        // } else if (totalScore >= 26 && totalScore <= 35) {
        //   setRecommendedQuest([
        //     'Participating in school or community service activities.',
        //     'Hosting small discussion groups.',
        //     'Participating in team-based problem-solving projects.',
        //     'Participating in the planning of multicultural festivals at school.',
        //     'Starting digital education volunteer activities for the elderly in the community.',
        //   ]);
        //   setHelpText([
        //     'Find activities that your child might be interested in and participate together, such as volunteering at an animal shelter or engaging in environmental cleanup activities.',
        //     'Select topics of interest to your child and invite friends over for a discussion session.',
        //     'Encourage participation in team projects organized by schools and communities.',
        //     'Expand understanding through communication with people of diverse cultures and backgrounds.',
        //     'Develop leadership by planning and executing activities on your own initiative.',
        //   ]);
        // } else if (totalScore >= 36 && totalScore <= 45) {
        //   setRecommendedQuest([
        //     'Creating clubs or groups based on personal hobbies or interests.',
        //     'Planning and conducting cultural/art projects.',
        //     'Hosting presentations to share personal experiences or learning.',
        //     'Creating school clubs or groups for environmental protection.',
        //   ]);
        //   setHelpText([
        //     'Help your child create a small group centered around activities they enjoy.',
        //     'Assist your child in planning and conducting small projects based on their favorite cultural or artistic activities.',
        //     'Host a presentation at a school or community center where your child can share what they have learned or experienced with others.',
        //     'Consider ways to have a social impact through projects or events.',
        //   ]);
        // } else if (totalScore >= 46 && totalScore <= 55) {
        //   setRecommendedQuest([
        //     'Plan a recycling campaign in schools or the community.',
        //     'Participate in a school or community garden creation project.',
        //     'Create a volunteer group to engage in community service activities.',
        //   ]);
        //   setHelpText([
        //     'Actively use social media to promote campaigns or projects.',
        //     'Collaborate with friends to have a greater impact.',
        //     'Establish specific plans and implementation steps, and continuously evaluate and improve.',
        //   ]);
        // } else if (totalScore >= 56 && totalScore <= 65) {
        //   setRecommendedQuest([
        //     'Plan a social project to solve community problems.',
        //     'Create and operate an environmental protection club inside and outside of school.',
        //     'Execute a project to help the marginalized neighbors in the community.',
        //   ]);
        //   setHelpText([
        //     'Develop leadership and teamwork skills.',
        //     'Pursue not only short-term but also long-term and sustainable changes through projects or campaigns.',
        //     'Use various platforms to widely spread the message of the project.',
        //   ]);
        // } else if (totalScore >= 66 && totalScore <= 80) {
        //   setRecommendedQuest([
        //     'Plan a sustainable development project within the community.',
        //     'Operate multicultural understanding enhancement programs inside and outside of school.',
        //     'Develop and execute mentoring programs for young people.',
        //   ]);
        //   setHelpText([
        //     'Use networking to involve various experts and volunteers in the project.',
        //     'Set up interim evaluations to check the progress of the project towards its goals.',
        //     'Maximize the effectiveness of the project by understanding the needs and demands of the community.',
        //   ]);
        // } else if (totalScore >= 81 && totalScore <= 98) {
        //   setRecommendedQuest([
        //     'Plan a community cultural festival.',
        //     'Operate a no-smoking campaign targeting young people.',
        //     'Participate in a student-led ecosystem restoration project.',
        //   ]);
        //   setHelpText([
        //     'Enhance the impact and participation of the project by collaborating with various organizations in schools or the community.',
        //     'Regularly review the objectives and progress of the project, and optimize the plan through necessary adjustments.',
        //     'Share the results and achievements of the project within schools or the community to generate more interest and participation.',
        //   ]);
      }
      console.log('추천 활동:', setRecommendedQuest);
      // setRecommendedQuest(recommendedQuest);
      setIsQuizCompleted(true);
    }
    // const handleSelectScore = score => {
    //   // 현재 질문에 대한 점수 저장
    //   const newAnswers = [...answers];
    //   newAnswers[currentQuestionIndex] = score;
    //   setAnswers(newAnswers);

    //   // 다음 질문으로 넘어가기
    //   const nextQuestionIndex = currentQuestionIndex + 1;
    //   if (nextQuestionIndex < questions.length) {
    //     setCurrentQuestionIndex(nextQuestionIndex);
    //   } else {
    //     // 모든 질문이 완료되면 결과 처리
    //     console.log('질문 완료:', newAnswers);
    //     // 총 점수 계산
    //     const totalScore = newAnswers.reduce(
    //       (acc, current) => acc + current,
    //       0,
    //     );
    //     // 추천 활동 결정
    //     // let recommendedQuest;
    //     if (totalScore >= 3 && totalScore <= 8) {
    //       setRecommendedQuest([
    //         '집 주변 공원에서 새로운 친구 만들기',
    //         '친구와 함께 협동 미션 완수하기',
    //       ]);
    //       setHelpText([
    //         '공원을 산책하며 새로운 사람들에게 인사해보세요.',
    //         '함께할 수 있는 미니 게임이나 퍼즐을 찾아보세요',
    //       ]);
    //     } else if (totalScore >= 9 && totalScore <= 12) {
    //       setRecommendedQuest(['친구와 함께 협동 미션 완수하기']);
    //       setHelpText(['함께할 수 있는 미니 게임이나 퍼즐을 찾아보세요']);
    //     } else if (totalScore >= 13 && totalScore <= 15) {
    //       setRecommendedQuest(['학교나 마을에서 작은 프로젝트 기획하기']);
    //       setHelpText(['이웃을 위해 무엇을 할 수 있을지 생각해보세요']);
    //     }
    //     console.log('추천 활동:', setRecommendedQuest);
    //     // setRecommendedQuest(recommendedQuest);
    //     setIsQuizCompleted(true);
    //   }
    // };
  };

  const activitiesAndHelpTexts = recommendedQuest.map((quest, index) => ({
    title: quest,
    description: helpText[index] || '',
  }));

  const toggleItem = index => {
    if (selectedItems.includes(index)) {
      setSelecedItems(selectedItems.filter(item => item !== index));
    } else {
      setSelecedItems([...selectedItems, index]);
    }
  };

  const addQuest = () => {
    console.log('추가된 퀘스트:', selectedItems);
  };

  return (
    <View style={styles.scrollView}>
      {isQuizCompleted ? (
        // 퀴즈 완료 후 렌더링할 내용
        <FlatList
          data={activitiesAndHelpTexts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={styles.itemContainer}
              onPress={() => toggleItem(index)}>
              <View style={styles.checkbox}>
                {selectedItems.includes(index) && <Text>✓</Text>}
              </View>
              <View>
                <Text style={styles.question0}>{item.title}</Text>
                <Text style={styles.SubAnswer}>{item.description}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      ) : (
        // <Text style={styles.question0}>{recommendedQuest[0]}</Text>
        // <Text style={styles.SubAnswer}>{helpText[0]}</Text>
        // <Text style={styles.question1}>{recommendedQuest[1]}</Text>
        // <Text style={styles.SubAnswer}>{helpText[1]}</Text>

        // 퀴즈 진행 중 렌더링할 내용
        <View style={styles.page}>
          <Text style={styles.question1}>
            {questions[currentQuestionIndex].text}
          </Text>
          <View style={styles.Button_container}>
            {[1, 2, 3, 4, 5].map(score => (
              <TouchableOpacity
                key={score}
                style={styles.button}
                onPress={() => handleSelectScore(score)}>
                <Text>{score}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}
      {isQuizCompleted && (
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.buttonText}>Add Quest</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Questionnaire;
