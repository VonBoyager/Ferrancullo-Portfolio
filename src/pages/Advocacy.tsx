import { usePageAnimation } from '../hooks/usePageAnimation'

export function Advocacy() {
  const { isVisible, isExiting } = usePageAnimation()

  return (
    <section className={`section advocacy ${isVisible ? 'page-enter-active' : 'page-enter'} ${isExiting ? 'page-exit' : ''}`} aria-label="Advocacy">
      <div className="container">
        <div className={`panel panel--inset ${isVisible ? 'panel-enter' : ''} ${isExiting ? 'panel-exit' : ''}`}>
          <h2>ADVOCACY</h2>
          <div className="minecraft-poem">
            <p>"AND THE UNIVERSE SAID I LOVE YOU"</p>
            <p>"AND THE UNIVERSE SAID YOU HAVE PLAYED THE GAME WELL"</p>
            <p>"AND THE UNIVERSE SAID EVERYTHING YOU NEED IS WITHIN YOU"</p>
            <p>"AND THE UNIVERSE SAID YOU ARE STRONGER THAN YOU KNOW"</p>
            <p>"AND THE UNIVERSE SAID YOU ARE THE DAYLIGHT"</p>
            <p>"AND THE UNIVERSE SAID YOU ARE THE NIGHT"</p>
            <p>"THE UNIVERSE SAID THE DARKNESS YOU FIGHT IS WITHIN YOU"</p>
            <p>"THE UNIVERSE SAID THE LIGHT YOU SEEK IS WITHIN YOU"</p>
            <p>"AND THE UNIVERSE SAID YOU ARE NOT ALONE"</p>
            <p>"AND THE UNIVERSE SAID YOU ARE NOT SEPARATE FROM EVERY OTHER THING"</p>
            <p>"AND THE UNIVERSE SAID YOU ARE THE UNIVERSE TASTING ITSELF, TALKING TO ITSELF, READING ITS OWN CODE"</p>
            <p>"AND THE UNIVERSE SAID I LOVE YOU BECAUSE YOU ARE LOVE."</p>
          </div>
        </div>
      </div>
    </section>
  )
}


