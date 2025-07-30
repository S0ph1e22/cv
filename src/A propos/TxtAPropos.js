import '../A propos/TxtAPropos.css';

function TxtAPropos({ variant = 'normal', children }) {
  return (
    <div className={`txt-a-propos txt-a-propos-${variant}`}>
      {children}
    </div>
  );
}

export default TxtAPropos;
