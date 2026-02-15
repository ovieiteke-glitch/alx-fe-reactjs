function DataFetcher() {
  const [data, setData] = useState([]);
      const [loading, setLoading] = useState(true);
  
      useEffect(() => {
              const fetchData = async () => {
                  try {
                      const response = await fetch('./data.json');
                      const jsonData = await response.json();
                      setData(jsonData);
                      setLoading(false);
                  } catch (error) {
                      console.error("Error fetching data: ", error);
                      setLoading(false);
                  }
              };
              fetchData();
            }, []);
          };

      export default DataFetcher;