import {useState} from 'react';

interface Tab {
    label: string;
    content: React.ReactNode;
}

type TabContainerProps = {
    reviews?: number
}

const TabContainer: React.FC<TabContainerProps> = ({reviews}) => {
    const tabs: Tab[] = [
      { label: 'Description', content: <div className='max-w-[1026px] mx-auto my-[37px] text-[#9F9F9F]'>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.<br/><br />Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</div> },
      { label: 'Additional Information', content: <div className='max-w-[1026px] mx-auto my-[37px] text-[#9F9F9F]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, adipisci delectus, quasi praesentium velit, recusandae voluptates quidem est dolor perspiciatis porro distinctio sint ipsum aspernatur quisquam omnis voluptatum repellat magni?</div> },
      { label: `Reviews [${reviews}]`, content: <div className='max-w-[1026px] mx-auto my-[37px] text-[#9F9F9F]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae officia quam accusantium maiores fuga non id ducimus modi, quisquam molestiae? Reiciendis similique quia necessitatibus doloribus, aliquid nostrum maxime voluptates ad? <br /><br />Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel commodi, deleniti doloremque asperiores laudantium id, totam quae voluptate, debitis consectetur illo repudiandae explicabo voluptates molestias architecto fuga porro beatae. Culpa.</div> },
    ];
  
    const [activeTab, setActiveTab] = useState(0);
  
    const handleTabClick = (index: number) => {
      setActiveTab(index);
    };
  
    return (
      <div className="tab-container">
        <div className={`tab-list flex items-center justify-center gap-[52px] text-[24px] text-[#9F9F9F]`}>
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={index === activeTab ? 'active-tab text-black font-medium' : 'tab'}
              onClick={() => handleTabClick(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="tab-contents">
          {tabs.map((tab, index) => (
            <div
              key={tab.label}
              className={index === activeTab ? 'block' : 'hidden'}
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
export default TabContainer;