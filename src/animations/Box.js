import posed from 'react-pose';

export default posed.div({
  enter: {
    opacity: 1,
    delay: ({ i }) => i * 10
  },
  exit: {
    opacity: 0,
    delay: 50
  }
});