

export function Index() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
      diisi opo iki
    </div>
  )
}

export async function getServerSideProps() {
  const layout = 'default'
  return {
    props: {
      layout,
    },
  }
}

export default Index;
