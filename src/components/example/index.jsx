// const Example = () => {
//   return (
//     <div>
//       <h1>Example</h1>
//     </div>
//   );
// };

// export default Example;

export default function Example(props) {
  return (
    <div>
      <h1>{props.icon}</h1>
    </div>
  );
}
