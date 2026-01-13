
/* eslint-disable react/no-unescaped-entities */
export default function Code() {
  return <div className="relative size-full">
    {/* <Rnd> */}
    <div className="dark:gradient-mask-b-0 gradient-mask-b-60 p-2 pb-0 border rounded-2xl border-black/10 bg-black/5 dark:border-white/10 dark:bg-white/5 ">
      <div className="relative overflow-hidden shadow-xl flex bg-white dark:bg-black    sm:max-h-[none] rounded-xl lg:h-[34.6875rem] xl:h-[31.625rem]  ring-1 ring-inset  ring-black/20 dark:ring-white/10 !h-auto max-h-[none]">
        <div className="relative w-full flex flex-col">
          <div className="flex-none border-b border-slate-500/30">
            <div className="flex items-center  h-8 space-x-2 px-3">
              <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-yellow-300 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-emerald-300 rounded-full"></div>
            </div>
          </div>
          <div className="relative min-h-0 flex-auto flex flex-col">
            <div className="w-full flex-auto flex min-h-0 overflow-auto">
              <div className="w-full relative flex-auto">
                <pre className="flex min-h-full text-sm leading-6 xs:leading-3 xs:text-[10px] xxs:text-[8px]">
                  <div
                    aria-hidden="true"
                    className="block text-slate-300 dark:text-slate-600 flex-none py-4 pr-4 text-right select-none"
                    style={{ width: '50px' }}
                  >
                    {Array.from({ length: 9 }, (_, i) => (
                      <div key={i}>{i + 1}</div>
                    ))}
                  </div>
                  <code className="flex-auto relative block text-slate-200 dark:text-comment-grey-darker pt-4 pb-4 px-4 overflow-hidden ">
                    {`import Box from './components/Box'

      export default function Projects() {     
          const projects = [
              {name: 'AI OS Interface', link: '#', img: '/images/kashi-os.png', description: 'AI-based operating system interface.', skills: ['python', 'react', 'tensorflow']},
              {name: 'AI Chatbot',img: '/images/discord_clone.png', link: '#', description: 'AI Chatbot application with real-time NLP capabilities.', skills: ['python', 'nlp', 'pytorch']},
              {name: 'Object Detection', subtitle: 'research project', img: '/images/hero_section.png', link: '#', description: 'Automated Object Detection System', skills: ['python', 'opencv', 'yolo']}
      ];  
      return <section className="my-[180px] lg:mt-24 xs:mt-10">`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* </Rnd> */}
  </div>
}