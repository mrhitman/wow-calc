import { WowCalculatorContext, getInitialState } from "./index";
import { dehydrateGlyphString, dehydrateTalentString, getAvailablePoints, getClassByName } from "./tools";
import { useContext, useEffect, useReducer } from "react";

import { actions } from "./actions";
import { reducer } from './reducer';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export function useState() {
  return useReducer(reducer, getInitialState());
}

export function useDehydrateTalentString() {
  const navigate = useNavigate();
  const { state } = useContext(WowCalculatorContext);

  useEffect(() => {
    if (state.classId) {
      navigate(`.?t=${dehydrateTalentString(state)}&g=${dehydrateGlyphString(state)}`, {
        replace: true,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);
}

export function useHydrateString() {
  const { state, dispatch } = useContext(WowCalculatorContext);
  const { className: name } = useParams();
  const [params] = useSearchParams();
  const talentsString = params.get("t");
  const glyphsString = params.get("g");
  const classInfo = getClassByName(name);
  console.log(glyphsString);

  useEffect(() => {
    if (state.classId !== classInfo.id) {
      dispatch({
        type: actions.SELECT_HERO,
        payload: { id: classInfo.id, talentsString },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.classId, talentsString]);

  const availablePointCount = getAvailablePoints(state);
  return [classInfo, availablePointCount];
}

export function useImagePreloader(imageList) {
  const [imagesPreloaded, setImagesPreloaded] = useState(false);

  useEffect(() => {
    let isCancelled = false;

    async function effect() {
      console.log("PRELOAD");

      if (isCancelled) {
        return;
      }

      const imagesPromiseList = [];
      for (const i of imageList) {
        imagesPromiseList.push(preloadImage(i));
      }

      await Promise.all(imagesPromiseList);

      if (isCancelled) {
        return;
      }

      setImagesPreloaded(true);
    }

    effect();

    return () => {
      isCancelled = true;
    };
  }, [imageList]);

  return { imagesPreloaded };
}

function preloadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = function () {
      resolve(img);
    };
    img.onerror = img.onabort = function () {
      reject(src);
    };
    img.src = src;
  });
}
