import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import PageHeader from "../Components/PageHeader/PageHeader";
import Summery from "../Components/ThematicAreas/Summery";
import Headings from "../Components/ThematicAreas/Headings";
import Content from "../Components/ThematicAreas/Content";

const ThematicAreas = () => {
  const data = [
    {
      title: "Thematic Areas",
      focus: "Our Focus",
      BgImg:
        "https://images.pexels.com/photos/9722072/pexels-photo-9722072.jpeg?auto=compress&cs=tinysrgb&w=100dvh&h=100dvh&fit=crop&crop=entropy&ar=5:2&fm=jpg",
    },
    {
      title: "Habitat Preservation and Restoration",
      focus:
        "Focusing on the Protection and Restoration of Critical Ecosystems",
      BgImg:
        "https://images.pexels.com/photos/4577147/pexels-photo-4577147.jpeg?auto=compress&cs=tinysrgb&w=100dvh&h=100dvh&fit=crop&crop=entropy&ar=5:3&fm=jpg",
      activities:
        "This thematic area concentrates on preserving and restoring vital habitats such as forests, wetlands, grasslands, and marine ecosystems. Efforts include reforestation, combating desertification, protecting coastal and marine biodiversity, and promoting sustainable land management practices. Key activities involve planting native trees to restore deforested areas, implementing erosion control measures, and rehabilitating degraded wetlands to enhance water quality and provide habitat for wildlife. Additionally, this area involves monitoring ecosystem health, conducting biodiversity surveys, and collaborating with local communities to develop and implement habitat management plans that ensure the long-term conservation of these critical ecosystems.",
    },
    {
      title: "Species Conservation",
      focus: "Safeguarding Endangered Flora and Fauna",
      BgImg:
        "https://images.pexels.com/photos/4394471/pexels-photo-4394471.jpeg?auto=compress&cs=tinysrgb&w=100dvh&h=100dvh&fit=crop&crop=entropy&ar=3:1&fm=jpg",
      activities:
        "This area focuses on implementing programs to protect endangered and threatened species. Activities may include anti-poaching initiatives, establishing wildlife corridors, conducting breeding programs, and researching genetic diversity to ensure the survival of key species across the continent. Specific actions involve patrolling protected areas to deter poachers, constructing and maintaining corridors to connect fragmented habitats, and setting up captive breeding programs for critically endangered species. Research efforts aim to understand the genetic makeup of species populations, which can inform conservation strategies such as reintroducing genetically diverse individuals into the wild to bolster population resilience.",
    },
    {
      title: "Community Engagement and Education",
      focus: "Empowering Local Communities for Sustainable Conservation",
      BgImg:
        "https://images.pexels.com/photos/11580454/pexels-photo-11580454.jpeg?auto=compress&cs=tinysrgb&w=100dvh&h=100dvh&fit=crop&crop=entropy&ar=5:3&fm=jpg",
      activities:
        "This thematic area emphasizes engaging local communities through education and empowerment programs. Activities include raising awareness about biodiversity importance, providing training in sustainable agricultural practices, and involving communities in conservation efforts to ensure long-term success and local ownership of conservation initiatives. Initiatives might include workshops on the benefits of biodiversity, training sessions on eco-friendly farming techniques that reduce environmental impact, and community-based projects where locals participate in habitat restoration or species monitoring. These efforts help build a conservation ethic within communities and equip them with the knowledge and tools necessary to contribute to and benefit from conservation activities.",
    },
    {
      title: "Climate Change Mitigation and Adaptation",
      focus: "Addressing Biodiversity Threats Posed by Climate Change",
      BgImg:
        "https://images.pexels.com/photos/221012/pexels-photo-221012.jpeg?auto=compress&cs=tinysrgb&w=100dvh&h=100dvh&fit=crop&crop=entropy&ar=2:1&fm=jpg",
      activities:
        "This area focuses on mitigating and adapting to the impacts of climate change on biodiversity. Efforts include promoting climate-resilient agriculture, protecting climate-sensitive ecosystems, conducting research on climate change impacts, and implementing adaptation strategies to maintain ecosystem resilience. Examples of specific actions include introducing drought-resistant crop varieties to reduce vulnerability to changing weather patterns, protecting and restoring mangroves that buffer coastlines against storm surges, and studying shifts in species distributions to inform conservation planning. These initiatives aim to enhance the ability of both natural and human systems to withstand and adapt to climate-related challenges.",
    },
    {
      title: "Sustainable Use of Natural Resources",
      focus: "Balancing Human Needs with Conservation Goals",
      BgImg:
        "https://images.pexels.com/photos/4317168/pexels-photo-4317168.png?auto=compress&cs=tinysrgb&w=100dvh&h=100dvh&fit=crop&crop=entropy&ar=3:1&fm=jpg",
      activities:
        "This thematic area promotes the sustainable utilization of natural resources to balance human needs with conservation goals. Activities include promoting sustainable fishing practices, eco-friendly tourism, sustainable forestry, and developing markets for non-timber forest products, ensuring the long-term health of ecosystems and communities. Specific actions might involve establishing no-take zones in marine areas to allow fish populations to recover, developing eco-tourism initiatives that provide economic benefits to local communities while minimizing environmental impact, and supporting certification programs for sustainably harvested timber. Additionally, efforts focus on creating value chains for products such as nuts, fruits, and resins, which can be harvested without harming the forest.",
    },
    {
      title: "Policy Advocacy and Governance",
      focus: "Influencing Policies for Effective Biodiversity Conservation",
      BgImg:
        "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=100dvh&h=100dvh&fit=crop&crop=entropy&ar=2:1&fm=jpg",
      activities:
        "This thematic area focuses on advocating for and implementing effective biodiversity policies and governance frameworks. Strategies include engaging policymakers, creating partnerships with other organizations, advocating for laws and regulations that protect biodiversity, and promoting transparency, accountability, and community participation in environmental governance processes. Specific actions involve lobbying for stronger legal protections for endangered species, participating in international conventions on biodiversity, forming coalitions with NGOs to amplify conservation messages, and organizing public consultations to ensure that local voices are heard in environmental decision-making. By influencing policy at multiple levels, these efforts aim to create an enabling environment for sustainable biodiversity conservation.",
    },
  ];

  return (
    <>
      <Navbar />
      <PageHeader
        backgroundImage={data[0].BgImg}
        title={data[0].title}
        focus={data[0].focus}
      />

      <Summery />

      <Headings
        backgroundImage={data[1].BgImg}
        title={data[1].title}
        focus={data[1].focus}
      />
      <Content activities={data[1].activities} />

      <Headings
        backgroundImage={data[2].BgImg}
        title={data[2].title}
        focus={data[2].focus}
      />
      <Content activities={data[2].activities} />

      <Headings
        backgroundImage={data[3].BgImg}
        title={data[3].title}
        focus={data[3].focus}
      />
      <Content activities={data[3].activities} />

      <Headings
        backgroundImage={data[4].BgImg}
        title={data[4].title}
        focus={data[4].focus}
      />
      <Content activities={data[4].activities} />

      <Headings
        backgroundImage={data[5].BgImg}
        title={data[5].title}
        focus={data[5].focus}
      />
      <Content activities={data[5].activities} />

      <Headings
        backgroundImage={data[6].BgImg}
        title={data[6].title}
        focus={data[6].focus}
      />
      <Content activities={data[6].activities} />

      <Footer />
    </>
  );
};

export default ThematicAreas;
