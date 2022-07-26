
// export function useDehydrateTalentString() {
//   const navigate = useNavigate();
//   const { state } = useContext(WowCalculatorContextX);

//   useEffect(() => {
//     if (state.classId) {
//       navigate(`.?t=${dehydrateTalentString(state)}&g=${dehydrateGlyphString(state)}`, {
//         replace: true,
//       });
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [state]);
// }

// export function useHydrateString() {
//   const context = useContext(WowCalculatorContextX);
//   // const { className: name } = useParams();
//   // const [params] = useSearchParams();
//   // const talentsString = params.get("t");
//   // const glyphsString = params.get("g");
//   // const classInfo = getClassByName(name);
//   // console.log(glyphsString);


//   const availablePointCount = 30;
//   return [classInfo, availablePointCount];
// }

// export function useImagePreloader(imageList) {
//   const [imagesPreloaded, setImagesPreloaded] = useState(false);

//   useEffect(() => {
//     let isCancelled = false;

//     async function effect() {
//       console.log("PRELOAD");

//       if (isCancelled) {
//         return;
//       }

//       const imagesPromiseList = [];
//       for (const i of imageList) {
//         imagesPromiseList.push(preloadImage(i));
//       }

//       await Promise.all(imagesPromiseList);

//       if (isCancelled) {
//         return;
//       }

//       setImagesPreloaded(true);
//     }

//     effect();

//     return () => {
//       isCancelled = true;
//     };
//   }, [imageList]);

//   return { imagesPreloaded };
// }

// function preloadImage(src) {
//   return new Promise((resolve, reject) => {
//     const img = new Image();
//     img.onload = function () {
//       resolve(img);
//     };
//     img.onerror = img.onabort = function () {
//       reject(src);
//     };
//     img.src = src;
//   });
// }
