import Particles from 'react-tsparticles'
// import { loadFull } from 'tsparticles'
import { loadSlim } from 'tsparticles-slim'
import { useMemo,useCallback } from 'react'

const ParticlesComponents=()=> {
  const options =useMemo(()=>{
    return {};
  },[])

  const particlesInit = useCallback((engine)=>{
    loadSlim(engine)
  },[])

  return <Particles init={particlesInit} options={options}/>
}
export default ParticlesComponents

