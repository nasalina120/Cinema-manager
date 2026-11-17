import style from './NotFoundPage.module.sass';

// Сторінка 404
function NotFoundPage () {
  return (
    <div className={style.wrapper}>
      <div className={style.box}>
        <div>close !</div>
        <p>
          <span>error 404 !</span>
          {"sorry page isn't found"}
        </p>
      </div>
    </div>
  );
}

export default NotFoundPage;
