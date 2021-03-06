export default function ContactContainer({reference}) {
  return (
    <div ref={reference} id="contact" className='p-5 border-t border-[#28282c] mt-6'>
      <p className='text-base sm:text-xl'>You can reach me via these handles &darr;</p>
      <div className="grid grid-cols-2 pt-6">
        <SocialMediaHandles title="Social Media 🌐" data={socialMediaHandle} />
        <SocialMediaHandles title="Developer Profiles 👨🏻‍💻" data={developerProfiles}/>
      </div>

    </div>
  );
}

const socialMediaHandle = [
  { title: 'Twitter', url: 'https://twitter.com/SuryaAshi' },
  { title: 'Facebook', url: 'https://www.facebook.com/surya.ashi.3' },
  { title: 'Instagram', url: 'https://www.instagram.com/_ashish_surya_/' },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/surya-ashish-2200961ba/',
  },
  {title:"Github", url: "https://github.com/ashishsurya126"}
];

const developerProfiles = [
  {title:"Google Developer Profile", url:"https://developers.google.com/profile/u/suryaashish"},
  { title: "Hackerrank", url: "https://www.hackerrank.com/suryaashish2019" },
  { title: "Codeforces", url: "https://codeforces.com/profile/ashishsurya126" },
  { title: "Leetcode", url: "https://leetcode.com/ashishsurya126/" },
  
]

const SocialMediaHandles = ({title, data}) => {
  return (
    <div className="space-y-2 text-sm sm:text-base">
      <h3 className="">{title}</h3>
      <div className="flex flex-col text-[#545457] space-y-1">
        {data.map(d => (
          <a key={d.title} href={d.url} type="_blank" className="hover:text-[#61DAFB]">{d.title}</a>
        ))}
      </div>
    </div>
  )
}