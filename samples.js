// useEffect(() => {
  //   if (match) {
  //     setfourSections(prevSections => {
  //         const updatedSections = [...prevSections];
  //         const newArray = [];

  //         for (let i = 1; i < 5; i++) {
  //             console.log(match?.teams?.a?.score?.slice(i * 5 - 5, i * 5));
  //             newArray?.push(match?.teams?.a?.score?.slice(i * 5 - 5, i * 5));
  //         }

  //         updatedSections?.forEach(section => {
  //             for (let i = 0; i < 5; i++) {
  //                 section.data[i] = newArray[i];
  //             }
  //         });

  //         return updatedSections;
  //     });
  //     console.log('mounted2');
  // }
  // }, [match])

  // const [fourSections,setfourSections]=useState( [
  //   { id: 1, title: "Five Overs 1", data: [[], [], [], [], []],},
  //   { id: 2, title: "Five Overs 2", data: [[], [], [], [], []] },
  //   { id: 3, title: "Five Overs 3", data: [[], [], [], [], []] },
  //   { id: 4, title: "Five Overs 4", data: [[], [], [], [], []] },
  // ])


  // Sample data of five overs sections
  // const fourSections = [
  //   { id: 1, title: "Five Overs 1", data: [[], [], [], [], []],},
  //   { id: 2, title: "Five Overs 2", data: [[], [], [], [], []] },
  //   { id: 3, title: "Five Overs 3", data: [[], [], [], [], []] },
  //   { id: 4, title: "Five Overs 4", data: [[], [], [], [], []] },
  // ];

  // const tenSections = [
  //   { id: 1, title: "Five Overs 1", data: [[], [], [], [], []] },
  //   { id: 2, title: "Five Overs 2", data: [[], [], [], [], []] },
  //   { id: 3, title: "Five Overs 3", data: [[], [], [], [], []] },
  //   { id: 4, title: "Five Overs 4", data: [[], [], [], [], []] },
  //   { id: 5, title: "Five Overs 1", data: [[], [], [], [], []] },
  //   { id: 6, title: "Five Overs 2", data: [[], [], [], [], []] },
  //   { id: 7, title: "Five Overs 3", data: [[], [], [], [], []] },
  //   { id: 8, title: "Five Overs 4", data: [[], [], [], [], []] },
  //   { id: 9, title: "Five Overs 4", data: [[], [], [], [], []] },
  //   { id: 10, title: "Five Overs 4", data:[[], [], [], [], []] },
  // ];

