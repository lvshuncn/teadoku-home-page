import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <section className={'section-title-wrapper'}>
        <div className={'header-title'}>Teadoku Inc.</div>
        <div className={'header-description'}>Unlocking the Future with AI</div>
      </section>
      <section className={'section-app section-anki-note'}>
        <div className={'app-content'}>
          <div className={'app-header'}>
            <div className={'app-logo'}>
              <Image
                src="https://teadoku.tech/anki_note_logo.png"
                alt="Anki Note Logo"
                width={80}
                height={48}
                priority
              />
            </div>
            <div className={'app-content-title'}>Anki Note</div>
          </div>
          <div className={'app-content-description'}>Generate flashcards from notes</div>
          <div className={'app-content-link'}>
            <a href={'https://apps.apple.com/us/app/anki-note/id1586139777'}>
              <Image
                src="https://teadoku.tech/badge-app-store.webp"
                alt="Download Anki Note From App Store"
                width={160}
                height={48}
                priority
              />
            </a>
          </div>
        </div>
        <div className={'app-preview'}>
          <Image
            src="https://teadoku.tech/card_list_en.png"
            alt="Anki Note Preview"
            width={400}
            height={24}
            priority
          />
        </div>
      </section>
      <section className={'section-app section-habit-store'}>
        <div className={'app-content'}>
          <div className={'app-header'}>
            <div className={'app-logo'}>
              <Image
                src="https://teadoku.tech/logo_hs.png"
                alt="Habit Store Reward"
                width={80}
                height={48}
                priority
              />
            </div>
            <div className={'app-content-title'}>Habit Score Reward</div>
          </div>
          <div className={'app-content-description'}>Build excellent habits and stay motivated with a rewarding
            system.
          </div>
          <div className={'app-content-link'}>
            <a href={'https://habit-score-reward.web.app/#/'}>
              <Image
                src="https://teadoku.tech/badge-web-app.webp"
                alt="Open Habit Score Reward"
                width={160}
                height={48}
                priority
              />
            </a>
          </div>
        </div>
        <div className={'app-preview'} style={{borderRadius: 8, overflow: 'hidden'}}>
          <Image
            src="https://teadoku.tech/web_hs.png"
            alt="Habit Score Reward Preview"
            width={400}
            height={24}
            priority
          />
        </div>
      </section>
      <section className={'section-app section-habit-store'}>
        <div className={'app-content'}>
          <div className={'app-header'}>
            <div className={'app-logo'}>
              <Image
                src="https://teadoku.tech/logo_fa.png"
                alt="Child Reward Store"
                width={80}
                height={48}
                priority
              />
            </div>
            <div className={'app-content-title'}>Child Reward Store</div>
          </div>
          <div className={'app-content-description'}>Chores and rewards.</div>
          <div className={'app-content-link'}>
            <a href={'https://family-reward.web.app/#/'}>
              <Image
                src="https://teadoku.tech/badge-web-app.webp"
                alt="Open Child Habit Reward"
                width={160}
                height={48}
                priority
              />
            </a>
          </div>
        </div>
        <div className={'app-preview'} style={{borderRadius: 8, overflow: 'hidden'}}>
          <Image
            src="https://teadoku.tech/web_fa.png"
            alt="Child Habit Reward Preview"
            width={400}
            height={24}
            priority
          />
        </div>
      </section>
      <div className={'section-footer'}>
        <div className={'company'}>
          © 2023, Teadoku Inc. All Rights Reserved.
        </div>
        <div className={'runner'}>Jason Lyu</div>
      </div>
    </main>
  )
}
