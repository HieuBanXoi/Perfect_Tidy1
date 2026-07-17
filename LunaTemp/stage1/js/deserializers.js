var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i8788 = root || request.c( 'UnityEngine.JointSpring' )
  var i8789 = data
  i8788.spring = i8789[0]
  i8788.damper = i8789[1]
  i8788.targetPosition = i8789[2]
  return i8788
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i8790 = root || request.c( 'UnityEngine.JointMotor' )
  var i8791 = data
  i8790.m_TargetVelocity = i8791[0]
  i8790.m_Force = i8791[1]
  i8790.m_FreeSpin = i8791[2]
  return i8790
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i8792 = root || request.c( 'UnityEngine.JointLimits' )
  var i8793 = data
  i8792.m_Min = i8793[0]
  i8792.m_Max = i8793[1]
  i8792.m_Bounciness = i8793[2]
  i8792.m_BounceMinVelocity = i8793[3]
  i8792.m_ContactDistance = i8793[4]
  i8792.minBounce = i8793[5]
  i8792.maxBounce = i8793[6]
  return i8792
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i8794 = root || request.c( 'UnityEngine.JointDrive' )
  var i8795 = data
  i8794.m_PositionSpring = i8795[0]
  i8794.m_PositionDamper = i8795[1]
  i8794.m_MaximumForce = i8795[2]
  i8794.m_UseAcceleration = i8795[3]
  return i8794
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i8796 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i8797 = data
  i8796.m_Spring = i8797[0]
  i8796.m_Damper = i8797[1]
  return i8796
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i8798 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i8799 = data
  i8798.m_Limit = i8799[0]
  i8798.m_Bounciness = i8799[1]
  i8798.m_ContactDistance = i8799[2]
  return i8798
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i8800 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i8801 = data
  i8800.m_ExtremumSlip = i8801[0]
  i8800.m_ExtremumValue = i8801[1]
  i8800.m_AsymptoteSlip = i8801[2]
  i8800.m_AsymptoteValue = i8801[3]
  i8800.m_Stiffness = i8801[4]
  return i8800
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i8802 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i8803 = data
  i8802.m_LowerAngle = i8803[0]
  i8802.m_UpperAngle = i8803[1]
  return i8802
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i8804 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i8805 = data
  i8804.m_MotorSpeed = i8805[0]
  i8804.m_MaximumMotorTorque = i8805[1]
  return i8804
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i8806 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i8807 = data
  i8806.m_DampingRatio = i8807[0]
  i8806.m_Frequency = i8807[1]
  i8806.m_Angle = i8807[2]
  return i8806
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i8808 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i8809 = data
  i8808.m_LowerTranslation = i8809[0]
  i8808.m_UpperTranslation = i8809[1]
  return i8808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i8810 = root || new pc.UnityMaterial()
  var i8811 = data
  i8810.name = i8811[0]
  request.r(i8811[1], i8811[2], 0, i8810, 'shader')
  i8810.renderQueue = i8811[3]
  i8810.enableInstancing = !!i8811[4]
  var i8813 = i8811[5]
  var i8812 = []
  for(var i = 0; i < i8813.length; i += 1) {
    i8812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i8813[i + 0]) );
  }
  i8810.floatParameters = i8812
  var i8815 = i8811[6]
  var i8814 = []
  for(var i = 0; i < i8815.length; i += 1) {
    i8814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i8815[i + 0]) );
  }
  i8810.colorParameters = i8814
  var i8817 = i8811[7]
  var i8816 = []
  for(var i = 0; i < i8817.length; i += 1) {
    i8816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i8817[i + 0]) );
  }
  i8810.vectorParameters = i8816
  var i8819 = i8811[8]
  var i8818 = []
  for(var i = 0; i < i8819.length; i += 1) {
    i8818.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i8819[i + 0]) );
  }
  i8810.textureParameters = i8818
  var i8821 = i8811[9]
  var i8820 = []
  for(var i = 0; i < i8821.length; i += 1) {
    i8820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i8821[i + 0]) );
  }
  i8810.materialFlags = i8820
  return i8810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i8824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i8825 = data
  i8824.name = i8825[0]
  i8824.value = i8825[1]
  return i8824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i8828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i8829 = data
  i8828.name = i8829[0]
  i8828.value = new pc.Color(i8829[1], i8829[2], i8829[3], i8829[4])
  return i8828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i8832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i8833 = data
  i8832.name = i8833[0]
  i8832.value = new pc.Vec4( i8833[1], i8833[2], i8833[3], i8833[4] )
  return i8832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i8836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i8837 = data
  i8836.name = i8837[0]
  request.r(i8837[1], i8837[2], 0, i8836, 'value')
  return i8836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i8840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i8841 = data
  i8840.name = i8841[0]
  i8840.enabled = !!i8841[1]
  return i8840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i8842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i8843 = data
  i8842.name = i8843[0]
  i8842.width = i8843[1]
  i8842.height = i8843[2]
  i8842.mipmapCount = i8843[3]
  i8842.anisoLevel = i8843[4]
  i8842.filterMode = i8843[5]
  i8842.hdr = !!i8843[6]
  i8842.format = i8843[7]
  i8842.wrapMode = i8843[8]
  i8842.alphaIsTransparency = !!i8843[9]
  i8842.alphaSource = i8843[10]
  i8842.graphicsFormat = i8843[11]
  i8842.sRGBTexture = !!i8843[12]
  i8842.desiredColorSpace = i8843[13]
  i8842.wrapU = i8843[14]
  i8842.wrapV = i8843[15]
  return i8842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i8844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i8845 = data
  i8844.position = new pc.Vec3( i8845[0], i8845[1], i8845[2] )
  i8844.scale = new pc.Vec3( i8845[3], i8845[4], i8845[5] )
  i8844.rotation = new pc.Quat(i8845[6], i8845[7], i8845[8], i8845[9])
  return i8844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i8846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i8847 = data
  i8846.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i8847[0], i8846.main)
  i8846.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i8847[1], i8846.colorBySpeed)
  i8846.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i8847[2], i8846.colorOverLifetime)
  i8846.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i8847[3], i8846.emission)
  i8846.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i8847[4], i8846.rotationBySpeed)
  i8846.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i8847[5], i8846.rotationOverLifetime)
  i8846.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i8847[6], i8846.shape)
  i8846.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i8847[7], i8846.sizeBySpeed)
  i8846.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i8847[8], i8846.sizeOverLifetime)
  i8846.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i8847[9], i8846.textureSheetAnimation)
  i8846.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i8847[10], i8846.velocityOverLifetime)
  i8846.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i8847[11], i8846.noise)
  i8846.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i8847[12], i8846.inheritVelocity)
  i8846.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i8847[13], i8846.forceOverLifetime)
  i8846.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i8847[14], i8846.limitVelocityOverLifetime)
  i8846.useAutoRandomSeed = !!i8847[15]
  i8846.randomSeed = i8847[16]
  return i8846
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i8848 = root || new pc.ParticleSystemMain()
  var i8849 = data
  i8848.duration = i8849[0]
  i8848.loop = !!i8849[1]
  i8848.prewarm = !!i8849[2]
  i8848.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8849[3], i8848.startDelay)
  i8848.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8849[4], i8848.startLifetime)
  i8848.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8849[5], i8848.startSpeed)
  i8848.startSize3D = !!i8849[6]
  i8848.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8849[7], i8848.startSizeX)
  i8848.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8849[8], i8848.startSizeY)
  i8848.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8849[9], i8848.startSizeZ)
  i8848.startRotation3D = !!i8849[10]
  i8848.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8849[11], i8848.startRotationX)
  i8848.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8849[12], i8848.startRotationY)
  i8848.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8849[13], i8848.startRotationZ)
  i8848.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i8849[14], i8848.startColor)
  i8848.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8849[15], i8848.gravityModifier)
  i8848.simulationSpace = i8849[16]
  request.r(i8849[17], i8849[18], 0, i8848, 'customSimulationSpace')
  i8848.simulationSpeed = i8849[19]
  i8848.useUnscaledTime = !!i8849[20]
  i8848.scalingMode = i8849[21]
  i8848.playOnAwake = !!i8849[22]
  i8848.maxParticles = i8849[23]
  i8848.emitterVelocityMode = i8849[24]
  i8848.stopAction = i8849[25]
  return i8848
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i8850 = root || new pc.MinMaxCurve()
  var i8851 = data
  i8850.mode = i8851[0]
  i8850.curveMin = new pc.AnimationCurve( { keys_flow: i8851[1] } )
  i8850.curveMax = new pc.AnimationCurve( { keys_flow: i8851[2] } )
  i8850.curveMultiplier = i8851[3]
  i8850.constantMin = i8851[4]
  i8850.constantMax = i8851[5]
  return i8850
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i8852 = root || new pc.MinMaxGradient()
  var i8853 = data
  i8852.mode = i8853[0]
  i8852.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i8853[1], i8852.gradientMin)
  i8852.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i8853[2], i8852.gradientMax)
  i8852.colorMin = new pc.Color(i8853[3], i8853[4], i8853[5], i8853[6])
  i8852.colorMax = new pc.Color(i8853[7], i8853[8], i8853[9], i8853[10])
  return i8852
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i8854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i8855 = data
  i8854.mode = i8855[0]
  var i8857 = i8855[1]
  var i8856 = []
  for(var i = 0; i < i8857.length; i += 1) {
    i8856.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i8857[i + 0]) );
  }
  i8854.colorKeys = i8856
  var i8859 = i8855[2]
  var i8858 = []
  for(var i = 0; i < i8859.length; i += 1) {
    i8858.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i8859[i + 0]) );
  }
  i8854.alphaKeys = i8858
  return i8854
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i8860 = root || new pc.ParticleSystemColorBySpeed()
  var i8861 = data
  i8860.enabled = !!i8861[0]
  i8860.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i8861[1], i8860.color)
  i8860.range = new pc.Vec2( i8861[2], i8861[3] )
  return i8860
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i8864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i8865 = data
  i8864.color = new pc.Color(i8865[0], i8865[1], i8865[2], i8865[3])
  i8864.time = i8865[4]
  return i8864
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i8868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i8869 = data
  i8868.alpha = i8869[0]
  i8868.time = i8869[1]
  return i8868
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i8870 = root || new pc.ParticleSystemColorOverLifetime()
  var i8871 = data
  i8870.enabled = !!i8871[0]
  i8870.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i8871[1], i8870.color)
  return i8870
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i8872 = root || new pc.ParticleSystemEmitter()
  var i8873 = data
  i8872.enabled = !!i8873[0]
  i8872.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8873[1], i8872.rateOverTime)
  i8872.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8873[2], i8872.rateOverDistance)
  var i8875 = i8873[3]
  var i8874 = []
  for(var i = 0; i < i8875.length; i += 1) {
    i8874.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i8875[i + 0]) );
  }
  i8872.bursts = i8874
  return i8872
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i8878 = root || new pc.ParticleSystemBurst()
  var i8879 = data
  i8878.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8879[0], i8878.count)
  i8878.cycleCount = i8879[1]
  i8878.minCount = i8879[2]
  i8878.maxCount = i8879[3]
  i8878.repeatInterval = i8879[4]
  i8878.time = i8879[5]
  return i8878
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i8880 = root || new pc.ParticleSystemRotationBySpeed()
  var i8881 = data
  i8880.enabled = !!i8881[0]
  i8880.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8881[1], i8880.x)
  i8880.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8881[2], i8880.y)
  i8880.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8881[3], i8880.z)
  i8880.separateAxes = !!i8881[4]
  i8880.range = new pc.Vec2( i8881[5], i8881[6] )
  return i8880
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i8882 = root || new pc.ParticleSystemRotationOverLifetime()
  var i8883 = data
  i8882.enabled = !!i8883[0]
  i8882.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8883[1], i8882.x)
  i8882.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8883[2], i8882.y)
  i8882.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8883[3], i8882.z)
  i8882.separateAxes = !!i8883[4]
  return i8882
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i8884 = root || new pc.ParticleSystemShape()
  var i8885 = data
  i8884.enabled = !!i8885[0]
  i8884.shapeType = i8885[1]
  i8884.randomDirectionAmount = i8885[2]
  i8884.sphericalDirectionAmount = i8885[3]
  i8884.randomPositionAmount = i8885[4]
  i8884.alignToDirection = !!i8885[5]
  i8884.radius = i8885[6]
  i8884.radiusMode = i8885[7]
  i8884.radiusSpread = i8885[8]
  i8884.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8885[9], i8884.radiusSpeed)
  i8884.radiusThickness = i8885[10]
  i8884.angle = i8885[11]
  i8884.length = i8885[12]
  i8884.boxThickness = new pc.Vec3( i8885[13], i8885[14], i8885[15] )
  i8884.meshShapeType = i8885[16]
  request.r(i8885[17], i8885[18], 0, i8884, 'mesh')
  request.r(i8885[19], i8885[20], 0, i8884, 'meshRenderer')
  request.r(i8885[21], i8885[22], 0, i8884, 'skinnedMeshRenderer')
  i8884.useMeshMaterialIndex = !!i8885[23]
  i8884.meshMaterialIndex = i8885[24]
  i8884.useMeshColors = !!i8885[25]
  i8884.normalOffset = i8885[26]
  i8884.arc = i8885[27]
  i8884.arcMode = i8885[28]
  i8884.arcSpread = i8885[29]
  i8884.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8885[30], i8884.arcSpeed)
  i8884.donutRadius = i8885[31]
  i8884.position = new pc.Vec3( i8885[32], i8885[33], i8885[34] )
  i8884.rotation = new pc.Vec3( i8885[35], i8885[36], i8885[37] )
  i8884.scale = new pc.Vec3( i8885[38], i8885[39], i8885[40] )
  return i8884
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i8886 = root || new pc.ParticleSystemSizeBySpeed()
  var i8887 = data
  i8886.enabled = !!i8887[0]
  i8886.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8887[1], i8886.x)
  i8886.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8887[2], i8886.y)
  i8886.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8887[3], i8886.z)
  i8886.separateAxes = !!i8887[4]
  i8886.range = new pc.Vec2( i8887[5], i8887[6] )
  return i8886
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i8888 = root || new pc.ParticleSystemSizeOverLifetime()
  var i8889 = data
  i8888.enabled = !!i8889[0]
  i8888.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8889[1], i8888.x)
  i8888.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8889[2], i8888.y)
  i8888.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8889[3], i8888.z)
  i8888.separateAxes = !!i8889[4]
  return i8888
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i8890 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i8891 = data
  i8890.enabled = !!i8891[0]
  i8890.mode = i8891[1]
  i8890.animation = i8891[2]
  i8890.numTilesX = i8891[3]
  i8890.numTilesY = i8891[4]
  i8890.useRandomRow = !!i8891[5]
  i8890.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8891[6], i8890.frameOverTime)
  i8890.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8891[7], i8890.startFrame)
  i8890.cycleCount = i8891[8]
  i8890.rowIndex = i8891[9]
  i8890.flipU = i8891[10]
  i8890.flipV = i8891[11]
  i8890.spriteCount = i8891[12]
  var i8893 = i8891[13]
  var i8892 = []
  for(var i = 0; i < i8893.length; i += 2) {
  request.r(i8893[i + 0], i8893[i + 1], 2, i8892, '')
  }
  i8890.sprites = i8892
  return i8890
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i8896 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i8897 = data
  i8896.enabled = !!i8897[0]
  i8896.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8897[1], i8896.x)
  i8896.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8897[2], i8896.y)
  i8896.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8897[3], i8896.z)
  i8896.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8897[4], i8896.radial)
  i8896.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8897[5], i8896.speedModifier)
  i8896.space = i8897[6]
  i8896.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8897[7], i8896.orbitalX)
  i8896.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8897[8], i8896.orbitalY)
  i8896.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8897[9], i8896.orbitalZ)
  i8896.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8897[10], i8896.orbitalOffsetX)
  i8896.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8897[11], i8896.orbitalOffsetY)
  i8896.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8897[12], i8896.orbitalOffsetZ)
  return i8896
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i8898 = root || new pc.ParticleSystemNoise()
  var i8899 = data
  i8898.enabled = !!i8899[0]
  i8898.separateAxes = !!i8899[1]
  i8898.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8899[2], i8898.strengthX)
  i8898.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8899[3], i8898.strengthY)
  i8898.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8899[4], i8898.strengthZ)
  i8898.frequency = i8899[5]
  i8898.damping = !!i8899[6]
  i8898.octaveCount = i8899[7]
  i8898.octaveMultiplier = i8899[8]
  i8898.octaveScale = i8899[9]
  i8898.quality = i8899[10]
  i8898.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8899[11], i8898.scrollSpeed)
  i8898.scrollSpeedMultiplier = i8899[12]
  i8898.remapEnabled = !!i8899[13]
  i8898.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8899[14], i8898.remapX)
  i8898.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8899[15], i8898.remapY)
  i8898.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8899[16], i8898.remapZ)
  i8898.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8899[17], i8898.positionAmount)
  i8898.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8899[18], i8898.rotationAmount)
  i8898.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8899[19], i8898.sizeAmount)
  return i8898
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i8900 = root || new pc.ParticleSystemInheritVelocity()
  var i8901 = data
  i8900.enabled = !!i8901[0]
  i8900.mode = i8901[1]
  i8900.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8901[2], i8900.curve)
  return i8900
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i8902 = root || new pc.ParticleSystemForceOverLifetime()
  var i8903 = data
  i8902.enabled = !!i8903[0]
  i8902.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8903[1], i8902.x)
  i8902.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8903[2], i8902.y)
  i8902.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8903[3], i8902.z)
  i8902.space = i8903[4]
  i8902.randomized = !!i8903[5]
  return i8902
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i8904 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i8905 = data
  i8904.enabled = !!i8905[0]
  i8904.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8905[1], i8904.limit)
  i8904.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8905[2], i8904.limitX)
  i8904.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8905[3], i8904.limitY)
  i8904.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8905[4], i8904.limitZ)
  i8904.dampen = i8905[5]
  i8904.separateAxes = !!i8905[6]
  i8904.space = i8905[7]
  i8904.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8905[8], i8904.drag)
  i8904.multiplyDragByParticleSize = !!i8905[9]
  i8904.multiplyDragByParticleVelocity = !!i8905[10]
  return i8904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i8906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i8907 = data
  request.r(i8907[0], i8907[1], 0, i8906, 'mesh')
  i8906.meshCount = i8907[2]
  i8906.activeVertexStreamsCount = i8907[3]
  i8906.alignment = i8907[4]
  i8906.renderMode = i8907[5]
  i8906.sortMode = i8907[6]
  i8906.lengthScale = i8907[7]
  i8906.velocityScale = i8907[8]
  i8906.cameraVelocityScale = i8907[9]
  i8906.normalDirection = i8907[10]
  i8906.sortingFudge = i8907[11]
  i8906.minParticleSize = i8907[12]
  i8906.maxParticleSize = i8907[13]
  i8906.pivot = new pc.Vec3( i8907[14], i8907[15], i8907[16] )
  request.r(i8907[17], i8907[18], 0, i8906, 'trailMaterial')
  i8906.applyActiveColorSpace = !!i8907[19]
  i8906.enabled = !!i8907[20]
  request.r(i8907[21], i8907[22], 0, i8906, 'sharedMaterial')
  var i8909 = i8907[23]
  var i8908 = []
  for(var i = 0; i < i8909.length; i += 2) {
  request.r(i8909[i + 0], i8909[i + 1], 2, i8908, '')
  }
  i8906.sharedMaterials = i8908
  i8906.receiveShadows = !!i8907[24]
  i8906.shadowCastingMode = i8907[25]
  i8906.sortingLayerID = i8907[26]
  i8906.sortingOrder = i8907[27]
  i8906.lightmapIndex = i8907[28]
  i8906.lightmapSceneIndex = i8907[29]
  i8906.lightmapScaleOffset = new pc.Vec4( i8907[30], i8907[31], i8907[32], i8907[33] )
  i8906.lightProbeUsage = i8907[34]
  i8906.reflectionProbeUsage = i8907[35]
  return i8906
}

Deserializers["MergeEffect"] = function (request, data, root) {
  var i8912 = root || request.c( 'MergeEffect' )
  var i8913 = data
  request.r(i8913[0], i8913[1], 0, i8912, 'tf')
  return i8912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i8914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i8915 = data
  i8914.name = i8915[0]
  i8914.tagId = i8915[1]
  i8914.enabled = !!i8915[2]
  i8914.isStatic = !!i8915[3]
  i8914.layer = i8915[4]
  return i8914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i8916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i8917 = data
  i8916.name = i8917[0]
  i8916.halfPrecision = !!i8917[1]
  i8916.useSimplification = !!i8917[2]
  i8916.useUInt32IndexFormat = !!i8917[3]
  i8916.vertexCount = i8917[4]
  i8916.aabb = i8917[5]
  var i8919 = i8917[6]
  var i8918 = []
  for(var i = 0; i < i8919.length; i += 1) {
    i8918.push( !!i8919[i + 0] );
  }
  i8916.streams = i8918
  i8916.vertices = i8917[7]
  var i8921 = i8917[8]
  var i8920 = []
  for(var i = 0; i < i8921.length; i += 1) {
    i8920.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i8921[i + 0]) );
  }
  i8916.subMeshes = i8920
  var i8923 = i8917[9]
  var i8922 = []
  for(var i = 0; i < i8923.length; i += 16) {
    i8922.push( new pc.Mat4().setData(i8923[i + 0], i8923[i + 1], i8923[i + 2], i8923[i + 3],  i8923[i + 4], i8923[i + 5], i8923[i + 6], i8923[i + 7],  i8923[i + 8], i8923[i + 9], i8923[i + 10], i8923[i + 11],  i8923[i + 12], i8923[i + 13], i8923[i + 14], i8923[i + 15]) );
  }
  i8916.bindposes = i8922
  var i8925 = i8917[10]
  var i8924 = []
  for(var i = 0; i < i8925.length; i += 1) {
    i8924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i8925[i + 0]) );
  }
  i8916.blendShapes = i8924
  return i8916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i8930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i8931 = data
  i8930.triangles = i8931[0]
  return i8930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i8936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i8937 = data
  i8936.name = i8937[0]
  var i8939 = i8937[1]
  var i8938 = []
  for(var i = 0; i < i8939.length; i += 1) {
    i8938.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i8939[i + 0]) );
  }
  i8936.frames = i8938
  return i8936
}

Deserializers["BlinkEffect"] = function (request, data, root) {
  var i8940 = root || request.c( 'BlinkEffect' )
  var i8941 = data
  request.r(i8941[0], i8941[1], 0, i8940, 'tf')
  return i8940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i8942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i8943 = data
  i8942.name = i8943[0]
  i8942.index = i8943[1]
  i8942.startup = !!i8943[2]
  return i8942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i8944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i8945 = data
  i8944.pivot = new pc.Vec2( i8945[0], i8945[1] )
  i8944.anchorMin = new pc.Vec2( i8945[2], i8945[3] )
  i8944.anchorMax = new pc.Vec2( i8945[4], i8945[5] )
  i8944.sizeDelta = new pc.Vec2( i8945[6], i8945[7] )
  i8944.anchoredPosition3D = new pc.Vec3( i8945[8], i8945[9], i8945[10] )
  i8944.rotation = new pc.Quat(i8945[11], i8945[12], i8945[13], i8945[14])
  i8944.scale = new pc.Vec3( i8945[15], i8945[16], i8945[17] )
  return i8944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i8946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i8947 = data
  i8946.planeDistance = i8947[0]
  i8946.referencePixelsPerUnit = i8947[1]
  i8946.isFallbackOverlay = !!i8947[2]
  i8946.renderMode = i8947[3]
  i8946.renderOrder = i8947[4]
  i8946.sortingLayerName = i8947[5]
  i8946.sortingOrder = i8947[6]
  i8946.scaleFactor = i8947[7]
  request.r(i8947[8], i8947[9], 0, i8946, 'worldCamera')
  i8946.overrideSorting = !!i8947[10]
  i8946.pixelPerfect = !!i8947[11]
  i8946.targetDisplay = i8947[12]
  i8946.overridePixelPerfect = !!i8947[13]
  i8946.enabled = !!i8947[14]
  return i8946
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i8948 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i8949 = data
  i8948.m_UiScaleMode = i8949[0]
  i8948.m_ReferencePixelsPerUnit = i8949[1]
  i8948.m_ScaleFactor = i8949[2]
  i8948.m_ReferenceResolution = new pc.Vec2( i8949[3], i8949[4] )
  i8948.m_ScreenMatchMode = i8949[5]
  i8948.m_MatchWidthOrHeight = i8949[6]
  i8948.m_PhysicalUnit = i8949[7]
  i8948.m_FallbackScreenDPI = i8949[8]
  i8948.m_DefaultSpriteDPI = i8949[9]
  i8948.m_DynamicPixelsPerUnit = i8949[10]
  i8948.m_PresetInfoIsWorld = !!i8949[11]
  return i8948
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i8950 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i8951 = data
  i8950.m_IgnoreReversedGraphics = !!i8951[0]
  i8950.m_BlockingObjects = i8951[1]
  i8950.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i8951[2] )
  return i8950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i8952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i8953 = data
  request.r(i8953[0], i8953[1], 0, i8952, 'animatorController')
  request.r(i8953[2], i8953[3], 0, i8952, 'avatar')
  i8952.updateMode = i8953[4]
  i8952.hasTransformHierarchy = !!i8953[5]
  i8952.applyRootMotion = !!i8953[6]
  var i8955 = i8953[7]
  var i8954 = []
  for(var i = 0; i < i8955.length; i += 2) {
  request.r(i8955[i + 0], i8955[i + 1], 2, i8954, '')
  }
  i8952.humanBones = i8954
  i8952.enabled = !!i8953[8]
  return i8952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i8958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i8959 = data
  i8958.cullTransparentMesh = !!i8959[0]
  return i8958
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i8960 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i8961 = data
  i8960.m_hasFontAssetChanged = !!i8961[0]
  request.r(i8961[1], i8961[2], 0, i8960, 'm_baseMaterial')
  i8960.m_maskOffset = new pc.Vec4( i8961[3], i8961[4], i8961[5], i8961[6] )
  i8960.m_text = i8961[7]
  i8960.m_isRightToLeft = !!i8961[8]
  request.r(i8961[9], i8961[10], 0, i8960, 'm_fontAsset')
  request.r(i8961[11], i8961[12], 0, i8960, 'm_sharedMaterial')
  var i8963 = i8961[13]
  var i8962 = []
  for(var i = 0; i < i8963.length; i += 2) {
  request.r(i8963[i + 0], i8963[i + 1], 2, i8962, '')
  }
  i8960.m_fontSharedMaterials = i8962
  request.r(i8961[14], i8961[15], 0, i8960, 'm_fontMaterial')
  var i8965 = i8961[16]
  var i8964 = []
  for(var i = 0; i < i8965.length; i += 2) {
  request.r(i8965[i + 0], i8965[i + 1], 2, i8964, '')
  }
  i8960.m_fontMaterials = i8964
  i8960.m_fontColor32 = UnityEngine.Color32.ConstructColor(i8961[17], i8961[18], i8961[19], i8961[20])
  i8960.m_fontColor = new pc.Color(i8961[21], i8961[22], i8961[23], i8961[24])
  i8960.m_enableVertexGradient = !!i8961[25]
  i8960.m_colorMode = i8961[26]
  i8960.m_fontColorGradient = request.d('TMPro.VertexGradient', i8961[27], i8960.m_fontColorGradient)
  request.r(i8961[28], i8961[29], 0, i8960, 'm_fontColorGradientPreset')
  request.r(i8961[30], i8961[31], 0, i8960, 'm_spriteAsset')
  i8960.m_tintAllSprites = !!i8961[32]
  request.r(i8961[33], i8961[34], 0, i8960, 'm_StyleSheet')
  i8960.m_TextStyleHashCode = i8961[35]
  i8960.m_overrideHtmlColors = !!i8961[36]
  i8960.m_faceColor = UnityEngine.Color32.ConstructColor(i8961[37], i8961[38], i8961[39], i8961[40])
  i8960.m_fontSize = i8961[41]
  i8960.m_fontSizeBase = i8961[42]
  i8960.m_fontWeight = i8961[43]
  i8960.m_enableAutoSizing = !!i8961[44]
  i8960.m_fontSizeMin = i8961[45]
  i8960.m_fontSizeMax = i8961[46]
  i8960.m_fontStyle = i8961[47]
  i8960.m_HorizontalAlignment = i8961[48]
  i8960.m_VerticalAlignment = i8961[49]
  i8960.m_textAlignment = i8961[50]
  i8960.m_characterSpacing = i8961[51]
  i8960.m_wordSpacing = i8961[52]
  i8960.m_lineSpacing = i8961[53]
  i8960.m_lineSpacingMax = i8961[54]
  i8960.m_paragraphSpacing = i8961[55]
  i8960.m_charWidthMaxAdj = i8961[56]
  i8960.m_TextWrappingMode = i8961[57]
  i8960.m_wordWrappingRatios = i8961[58]
  i8960.m_overflowMode = i8961[59]
  request.r(i8961[60], i8961[61], 0, i8960, 'm_linkedTextComponent')
  request.r(i8961[62], i8961[63], 0, i8960, 'parentLinkedComponent')
  i8960.m_enableKerning = !!i8961[64]
  var i8967 = i8961[65]
  var i8966 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i8967.length; i += 1) {
    i8966.add(i8967[i + 0]);
  }
  i8960.m_ActiveFontFeatures = i8966
  i8960.m_enableExtraPadding = !!i8961[66]
  i8960.checkPaddingRequired = !!i8961[67]
  i8960.m_isRichText = !!i8961[68]
  i8960.m_parseCtrlCharacters = !!i8961[69]
  i8960.m_isOrthographic = !!i8961[70]
  i8960.m_isCullingEnabled = !!i8961[71]
  i8960.m_horizontalMapping = i8961[72]
  i8960.m_verticalMapping = i8961[73]
  i8960.m_uvLineOffset = i8961[74]
  i8960.m_geometrySortingOrder = i8961[75]
  i8960.m_IsTextObjectScaleStatic = !!i8961[76]
  i8960.m_VertexBufferAutoSizeReduction = !!i8961[77]
  i8960.m_useMaxVisibleDescender = !!i8961[78]
  i8960.m_pageToDisplay = i8961[79]
  i8960.m_margin = new pc.Vec4( i8961[80], i8961[81], i8961[82], i8961[83] )
  i8960.m_isUsingLegacyAnimationComponent = !!i8961[84]
  i8960.m_isVolumetricText = !!i8961[85]
  request.r(i8961[86], i8961[87], 0, i8960, 'm_Material')
  i8960.m_EmojiFallbackSupport = !!i8961[88]
  i8960.m_Maskable = !!i8961[89]
  i8960.m_Color = new pc.Color(i8961[90], i8961[91], i8961[92], i8961[93])
  i8960.m_RaycastTarget = !!i8961[94]
  i8960.m_RaycastPadding = new pc.Vec4( i8961[95], i8961[96], i8961[97], i8961[98] )
  return i8960
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i8968 = root || request.c( 'TMPro.VertexGradient' )
  var i8969 = data
  i8968.topLeft = new pc.Color(i8969[0], i8969[1], i8969[2], i8969[3])
  i8968.topRight = new pc.Color(i8969[4], i8969[5], i8969[6], i8969[7])
  i8968.bottomLeft = new pc.Color(i8969[8], i8969[9], i8969[10], i8969[11])
  i8968.bottomRight = new pc.Color(i8969[12], i8969[13], i8969[14], i8969[15])
  return i8968
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i8972 = root || request.c( 'UnityEngine.UI.Slider' )
  var i8973 = data
  request.r(i8973[0], i8973[1], 0, i8972, 'm_FillRect')
  request.r(i8973[2], i8973[3], 0, i8972, 'm_HandleRect')
  i8972.m_Direction = i8973[4]
  i8972.m_MinValue = i8973[5]
  i8972.m_MaxValue = i8973[6]
  i8972.m_WholeNumbers = !!i8973[7]
  i8972.m_Value = i8973[8]
  i8972.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i8973[9], i8972.m_OnValueChanged)
  i8972.m_Navigation = request.d('UnityEngine.UI.Navigation', i8973[10], i8972.m_Navigation)
  i8972.m_Transition = i8973[11]
  i8972.m_Colors = request.d('UnityEngine.UI.ColorBlock', i8973[12], i8972.m_Colors)
  i8972.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i8973[13], i8972.m_SpriteState)
  i8972.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i8973[14], i8972.m_AnimationTriggers)
  i8972.m_Interactable = !!i8973[15]
  request.r(i8973[16], i8973[17], 0, i8972, 'm_TargetGraphic')
  return i8972
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i8974 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i8975 = data
  i8974.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i8975[0], i8974.m_PersistentCalls)
  return i8974
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i8976 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i8977 = data
  var i8979 = i8977[0]
  var i8978 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i8979.length; i += 1) {
    i8978.add(request.d('UnityEngine.Events.PersistentCall', i8979[i + 0]));
  }
  i8976.m_Calls = i8978
  return i8976
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i8982 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i8983 = data
  request.r(i8983[0], i8983[1], 0, i8982, 'm_Target')
  i8982.m_TargetAssemblyTypeName = i8983[2]
  i8982.m_MethodName = i8983[3]
  i8982.m_Mode = i8983[4]
  i8982.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i8983[5], i8982.m_Arguments)
  i8982.m_CallState = i8983[6]
  return i8982
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i8984 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i8985 = data
  i8984.m_Mode = i8985[0]
  i8984.m_WrapAround = !!i8985[1]
  request.r(i8985[2], i8985[3], 0, i8984, 'm_SelectOnUp')
  request.r(i8985[4], i8985[5], 0, i8984, 'm_SelectOnDown')
  request.r(i8985[6], i8985[7], 0, i8984, 'm_SelectOnLeft')
  request.r(i8985[8], i8985[9], 0, i8984, 'm_SelectOnRight')
  return i8984
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i8986 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i8987 = data
  i8986.m_NormalColor = new pc.Color(i8987[0], i8987[1], i8987[2], i8987[3])
  i8986.m_HighlightedColor = new pc.Color(i8987[4], i8987[5], i8987[6], i8987[7])
  i8986.m_PressedColor = new pc.Color(i8987[8], i8987[9], i8987[10], i8987[11])
  i8986.m_SelectedColor = new pc.Color(i8987[12], i8987[13], i8987[14], i8987[15])
  i8986.m_DisabledColor = new pc.Color(i8987[16], i8987[17], i8987[18], i8987[19])
  i8986.m_ColorMultiplier = i8987[20]
  i8986.m_FadeDuration = i8987[21]
  return i8986
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i8988 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i8989 = data
  request.r(i8989[0], i8989[1], 0, i8988, 'm_HighlightedSprite')
  request.r(i8989[2], i8989[3], 0, i8988, 'm_PressedSprite')
  request.r(i8989[4], i8989[5], 0, i8988, 'm_SelectedSprite')
  request.r(i8989[6], i8989[7], 0, i8988, 'm_DisabledSprite')
  return i8988
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i8990 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i8991 = data
  i8990.m_NormalTrigger = i8991[0]
  i8990.m_HighlightedTrigger = i8991[1]
  i8990.m_PressedTrigger = i8991[2]
  i8990.m_SelectedTrigger = i8991[3]
  i8990.m_DisabledTrigger = i8991[4]
  return i8990
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i8992 = root || request.c( 'UnityEngine.UI.Image' )
  var i8993 = data
  request.r(i8993[0], i8993[1], 0, i8992, 'm_Sprite')
  i8992.m_Type = i8993[2]
  i8992.m_PreserveAspect = !!i8993[3]
  i8992.m_FillCenter = !!i8993[4]
  i8992.m_FillMethod = i8993[5]
  i8992.m_FillAmount = i8993[6]
  i8992.m_FillClockwise = !!i8993[7]
  i8992.m_FillOrigin = i8993[8]
  i8992.m_UseSpriteMesh = !!i8993[9]
  i8992.m_PixelsPerUnitMultiplier = i8993[10]
  request.r(i8993[11], i8993[12], 0, i8992, 'm_Material')
  i8992.m_Maskable = !!i8993[13]
  i8992.m_Color = new pc.Color(i8993[14], i8993[15], i8993[16], i8993[17])
  i8992.m_RaycastTarget = !!i8993[18]
  i8992.m_RaycastPadding = new pc.Vec4( i8993[19], i8993[20], i8993[21], i8993[22] )
  return i8992
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i8994 = root || request.c( 'UnityEngine.UI.Button' )
  var i8995 = data
  i8994.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i8995[0], i8994.m_OnClick)
  i8994.m_Navigation = request.d('UnityEngine.UI.Navigation', i8995[1], i8994.m_Navigation)
  i8994.m_Transition = i8995[2]
  i8994.m_Colors = request.d('UnityEngine.UI.ColorBlock', i8995[3], i8994.m_Colors)
  i8994.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i8995[4], i8994.m_SpriteState)
  i8994.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i8995[5], i8994.m_AnimationTriggers)
  i8994.m_Interactable = !!i8995[6]
  request.r(i8995[7], i8995[8], 0, i8994, 'm_TargetGraphic')
  return i8994
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i8996 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i8997 = data
  i8996.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i8997[0], i8996.m_PersistentCalls)
  return i8996
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i8998 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i8999 = data
  request.r(i8999[0], i8999[1], 0, i8998, 'm_ObjectArgument')
  i8998.m_ObjectArgumentAssemblyTypeName = i8999[2]
  i8998.m_IntArgument = i8999[3]
  i8998.m_FloatArgument = i8999[4]
  i8998.m_StringArgument = i8999[5]
  i8998.m_BoolArgument = !!i8999[6]
  return i8998
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i9000 = root || request.c( 'Ply_Pool' )
  var i9001 = data
  var i9003 = i9001[0]
  var i9002 = []
  for(var i = 0; i < i9003.length; i += 1) {
    i9002.push( request.d('Ply_Pool+PoolAmount', i9003[i + 0]) );
  }
  i9000.poolAmounts = i9002
  request.r(i9001[1], i9001[2], 0, i9000, 'poolHolder')
  return i9000
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i9006 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i9007 = data
  i9006.type = i9007[0]
  i9006.amount = i9007[1]
  request.r(i9007[2], i9007[3], 0, i9006, 'gameUnit')
  return i9006
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i9008 = root || request.c( 'Ply_SoundManager' )
  var i9009 = data
  var i9011 = i9009[0]
  var i9010 = []
  for(var i = 0; i < i9011.length; i += 1) {
    i9010.push( request.d('Ply_SoundManager+FxAudio', i9011[i + 0]) );
  }
  i9008.fxAudios = i9010
  var i9013 = i9009[1]
  var i9012 = []
  for(var i = 0; i < i9013.length; i += 2) {
  request.r(i9013[i + 0], i9013[i + 1], 2, i9012, '')
  }
  i9008.audioClips = i9012
  request.r(i9009[2], i9009[3], 0, i9008, 'sound')
  return i9008
}

Deserializers["Ply_SoundManager+FxAudio"] = function (request, data, root) {
  var i9016 = root || request.c( 'Ply_SoundManager+FxAudio' )
  var i9017 = data
  i9016.fxType = i9017[0]
  request.r(i9017[1], i9017[2], 0, i9016, 'audioClip')
  return i9016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i9020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i9021 = data
  request.r(i9021[0], i9021[1], 0, i9020, 'clip')
  request.r(i9021[2], i9021[3], 0, i9020, 'outputAudioMixerGroup')
  i9020.playOnAwake = !!i9021[4]
  i9020.loop = !!i9021[5]
  i9020.time = i9021[6]
  i9020.volume = i9021[7]
  i9020.pitch = i9021[8]
  i9020.enabled = !!i9021[9]
  return i9020
}

Deserializers["GameManager"] = function (request, data, root) {
  var i9022 = root || request.c( 'GameManager' )
  var i9023 = data
  i9022.isPlaying = !!i9023[0]
  i9022.isTutorial = !!i9023[1]
  i9022.isGotoStore = !!i9023[2]
  i9022.isDraggingConveyor = !!i9023[3]
  i9022.countMove = i9023[4]
  i9022.maxMove = i9023[5]
  i9022.startLayer = i9023[6]
  i9022.currentLayer = i9023[7]
  request.r(i9023[8], i9023[9], 0, i9022, 'mainBox')
  request.r(i9023[10], i9023[11], 0, i9022, 'itemConveyor')
  i9022.useTimer = !!i9023[12]
  i9022.gameDuration = i9023[13]
  request.r(i9023[14], i9023[15], 0, i9022, 'handTutorial')
  i9022.tutorialDelay = i9023[16]
  i9022.maxTutorialPlacements = i9023[17]
  return i9022
}

Deserializers["UIManager"] = function (request, data, root) {
  var i9024 = root || request.c( 'UIManager' )
  var i9025 = data
  request.r(i9025[0], i9025[1], 0, i9024, 'winUI')
  request.r(i9025[2], i9025[3], 0, i9024, 'loseUI')
  request.r(i9025[4], i9025[5], 0, i9024, 'tutorial')
  request.r(i9025[6], i9025[7], 0, i9024, 'verticalUI')
  request.r(i9025[8], i9025[9], 0, i9024, 'horizontalUI')
  request.r(i9025[10], i9025[11], 0, i9024, 'downloadBtnVertical')
  request.r(i9025[12], i9025[13], 0, i9024, 'dowloadBtnHorizontal')
  request.r(i9025[14], i9025[15], 0, i9024, 'textAnim')
  i9024.isGoogleBuild = !!i9025[16]
  request.r(i9025[17], i9025[18], 0, i9024, 'progressSlider')
  request.r(i9025[19], i9025[20], 0, i9024, 'progressText')
  i9024.maxProgressItems = i9025[21]
  i9024.startProgressItems = i9025[22]
  i9024.screenWidth = i9025[23]
  i9024.screenHeight = i9025[24]
  i9024.scaleHeightOnWidth = i9025[25]
  i9024.isVertical = !!i9025[26]
  i9024.isScreenVertical = !!i9025[27]
  request.r(i9025[28], i9025[29], 0, i9024, 'cam')
  i9024.verticalUIHeightOnWidthRatio = i9025[30]
  i9024.screenVerticalHeightOnWidthRatio = i9025[31]
  i9024.introZoomOutMultiplier = i9025[32]
  i9024.cameraZoomDuration = i9025[33]
  i9024.useContinuousScaling = !!i9025[34]
  i9024.baseOrthographicSize = i9025[35]
  i9024.baseAspect = i9025[36]
  i9024.landscapeSize = i9025[37]
  i9024.defaultPortraitSize = i9025[38]
  var i9027 = i9025[39]
  var i9026 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i9027.length; i += 1) {
    i9026.add(request.d('ScreenScaleStep', i9027[i + 0]));
  }
  i9024.discreteScaleSteps = i9026
  i9024.usePerspectiveCamera = !!i9025[40]
  request.r(i9025[41], i9025[42], 0, i9024, 'perspectiveFocus')
  i9024.perspectiveFocusDistance = i9025[43]
  i9024.perspectivePadding = i9025[44]
  i9024.fitRendererBounds = !!i9025[45]
  request.r(i9025[46], i9025[47], 0, i9024, 'boundsRoot')
  var i9029 = i9025[48]
  var i9028 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i9029.length; i += 2) {
  request.r(i9029[i + 0], i9029[i + 1], 1, i9028, '')
  }
  i9024.boundsRenderers = i9028
  return i9024
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i9032 = root || request.c( 'ScreenScaleStep' )
  var i9033 = data
  i9032.heightOnWidthRatio = i9033[0]
  i9032.orthographicSize = i9033[1]
  return i9032
}

Deserializers["InputManager"] = function (request, data, root) {
  var i9036 = root || request.c( 'InputManager' )
  var i9037 = data
  i9036.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i9037[0] )
  i9036.targetLayer = UnityEngine.LayerMask.FromIntegerValue( i9037[1] )
  i9036.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i9037[2] )
  i9036.boxLayer = UnityEngine.LayerMask.FromIntegerValue( i9037[3] )
  i9036.conveyorLayer = UnityEngine.LayerMask.FromIntegerValue( i9037[4] )
  i9036.isDragging = !!i9037[5]
  request.r(i9037[6], i9037[7], 0, i9036, 'mainCamera')
  return i9036
}

Deserializers["ItemSetupTool"] = function (request, data, root) {
  var i9038 = root || request.c( 'ItemSetupTool' )
  var i9039 = data
  request.r(i9039[0], i9039[1], 0, i9038, 'spritesParent')
  request.r(i9039[2], i9039[3], 0, i9038, 'holdersParent')
  i9038.shadowSuffix = i9039[4]
  i9038.holderPrefix = i9039[5]
  i9038.holdersParentName = i9039[6]
  i9038.colliderDepth = i9039[7]
  i9038.colliderSizeMultiplier = i9039[8]
  i9038.minColliderSize = new pc.Vec2( i9039[9], i9039[10] )
  i9038.generatedShadowColor = new pc.Color(i9039[11], i9039[12], i9039[13], i9039[14])
  i9038.fadedBlackShadowColor = new pc.Color(i9039[15], i9039[16], i9039[17], i9039[18])
  i9038.generatedShadowLocalOffset = new pc.Vec3( i9039[19], i9039[20], i9039[21] )
  i9038.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i9039[22] )
  i9038.holderLayer = UnityEngine.LayerMask.FromIntegerValue( i9039[23] )
  return i9038
}

Deserializers["CameraController"] = function (request, data, root) {
  var i9040 = root || request.c( 'CameraController' )
  var i9041 = data
  request.r(i9041[0], i9041[1], 0, i9040, 'targetCamera')
  i9040.enableZoom = !!i9041[2]
  i9040.minZoomRatio = i9041[3]
  i9040.maxZoomRatio = i9041[4]
  i9040.mouseWheelZoomSpeed = i9041[5]
  i9040.pinchZoomSpeed = i9041[6]
  request.r(i9041[7], i9041[8], 0, i9040, 'conveyor')
  i9040.enableDrag = !!i9041[9]
  i9040.horizontalOnly = !!i9041[10]
  i9040.dragSensitivity = i9041[11]
  i9040.maxHorizontalOffset = i9041[12]
  i9040.maxVerticalOffset = i9041[13]
  return i9040
}

Deserializers["ItemSpawnManager"] = function (request, data, root) {
  var i9042 = root || request.c( 'ItemSpawnManager' )
  var i9043 = data
  i9042.spawnInRandomArea = !!i9043[0]
  i9042.spawnTargetMode = i9043[1]
  var i9045 = i9043[2]
  var i9044 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i9045.length; i += 2) {
  request.r(i9045[i + 0], i9045[i + 1], 1, i9044, '')
  }
  i9042.dynamicItems = i9044
  var i9047 = i9043[3]
  var i9046 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i9047.length; i += 2) {
  request.r(i9047[i + 0], i9047[i + 1], 1, i9046, '')
  }
  i9042.spawnTargets = i9046
  i9042.initialSpawnCount = i9043[4]
  i9042.revealDuration = i9043[5]
  i9042.showInitialBatchShadowsOnSpawn = !!i9043[6]
  i9042.spawnAreaSize = new pc.Vec2( i9043[7], i9043[8] )
  i9042.spawnAreaOffset = new pc.Vec3( i9043[9], i9043[10], i9043[11] )
  request.r(i9043[12], i9043[13], 0, i9042, 'randomSpawnParent')
  i9042.showShadowOnDragCount = i9043[14]
  return i9042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i9052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i9053 = data
  i9052.aspect = i9053[0]
  i9052.orthographic = !!i9053[1]
  i9052.orthographicSize = i9053[2]
  i9052.backgroundColor = new pc.Color(i9053[3], i9053[4], i9053[5], i9053[6])
  i9052.nearClipPlane = i9053[7]
  i9052.farClipPlane = i9053[8]
  i9052.fieldOfView = i9053[9]
  i9052.depth = i9053[10]
  i9052.clearFlags = i9053[11]
  i9052.cullingMask = i9053[12]
  i9052.rect = i9053[13]
  request.r(i9053[14], i9053[15], 0, i9052, 'targetTexture')
  i9052.usePhysicalProperties = !!i9053[16]
  i9052.focalLength = i9053[17]
  i9052.sensorSize = new pc.Vec2( i9053[18], i9053[19] )
  i9052.lensShift = new pc.Vec2( i9053[20], i9053[21] )
  i9052.gateFit = i9053[22]
  i9052.commandBufferCount = i9053[23]
  i9052.cameraType = i9053[24]
  i9052.enabled = !!i9053[25]
  return i9052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i9054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i9055 = data
  i9054.type = i9055[0]
  i9054.color = new pc.Color(i9055[1], i9055[2], i9055[3], i9055[4])
  i9054.cullingMask = i9055[5]
  i9054.intensity = i9055[6]
  i9054.range = i9055[7]
  i9054.spotAngle = i9055[8]
  i9054.shadows = i9055[9]
  i9054.shadowNormalBias = i9055[10]
  i9054.shadowBias = i9055[11]
  i9054.shadowStrength = i9055[12]
  i9054.shadowResolution = i9055[13]
  i9054.lightmapBakeType = i9055[14]
  i9054.renderMode = i9055[15]
  request.r(i9055[16], i9055[17], 0, i9054, 'cookie')
  i9054.cookieSize = i9055[18]
  i9054.shadowNearPlane = i9055[19]
  i9054.occlusionMaskChannel = i9055[20]
  i9054.enabled = !!i9055[21]
  return i9054
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i9056 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i9057 = data
  request.r(i9057[0], i9057[1], 0, i9056, 'm_FirstSelected')
  i9056.m_sendNavigationEvents = !!i9057[2]
  i9056.m_DragThreshold = i9057[3]
  return i9056
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i9058 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i9059 = data
  i9058.m_HorizontalAxis = i9059[0]
  i9058.m_VerticalAxis = i9059[1]
  i9058.m_SubmitButton = i9059[2]
  i9058.m_CancelButton = i9059[3]
  i9058.m_InputActionsPerSecond = i9059[4]
  i9058.m_RepeatDelay = i9059[5]
  i9058.m_ForceModuleActive = !!i9059[6]
  i9058.m_SendPointerHoverToParent = !!i9059[7]
  return i9058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i9060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i9061 = data
  i9060.color = new pc.Color(i9061[0], i9061[1], i9061[2], i9061[3])
  request.r(i9061[4], i9061[5], 0, i9060, 'sprite')
  i9060.flipX = !!i9061[6]
  i9060.flipY = !!i9061[7]
  i9060.drawMode = i9061[8]
  i9060.size = new pc.Vec2( i9061[9], i9061[10] )
  i9060.tileMode = i9061[11]
  i9060.adaptiveModeThreshold = i9061[12]
  i9060.maskInteraction = i9061[13]
  i9060.spriteSortPoint = i9061[14]
  i9060.enabled = !!i9061[15]
  request.r(i9061[16], i9061[17], 0, i9060, 'sharedMaterial')
  var i9063 = i9061[18]
  var i9062 = []
  for(var i = 0; i < i9063.length; i += 2) {
  request.r(i9063[i + 0], i9063[i + 1], 2, i9062, '')
  }
  i9060.sharedMaterials = i9062
  i9060.receiveShadows = !!i9061[19]
  i9060.shadowCastingMode = i9061[20]
  i9060.sortingLayerID = i9061[21]
  i9060.sortingOrder = i9061[22]
  i9060.lightmapIndex = i9061[23]
  i9060.lightmapSceneIndex = i9061[24]
  i9060.lightmapScaleOffset = new pc.Vec4( i9061[25], i9061[26], i9061[27], i9061[28] )
  i9060.lightProbeUsage = i9061[29]
  i9060.reflectionProbeUsage = i9061[30]
  return i9060
}

Deserializers["ItemHolder"] = function (request, data, root) {
  var i9064 = root || request.c( 'ItemHolder' )
  var i9065 = data
  i9064.id = i9065[0]
  return i9064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i9066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i9067 = data
  i9066.center = new pc.Vec3( i9067[0], i9067[1], i9067[2] )
  i9066.size = new pc.Vec3( i9067[3], i9067[4], i9067[5] )
  i9066.enabled = !!i9067[6]
  i9066.isTrigger = !!i9067[7]
  request.r(i9067[8], i9067[9], 0, i9066, 'material')
  return i9066
}

Deserializers["PSD_Tool"] = function (request, data, root) {
  var i9068 = root || request.c( 'PSD_Tool' )
  var i9069 = data
  var i9071 = i9069[0]
  var i9070 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i9071.length; i += 2) {
  request.r(i9071[i + 0], i9071[i + 1], 1, i9070, '')
  }
  i9068.sprites = i9070
  request.r(i9069[1], i9069[2], 0, i9068, 'holder')
  var i9073 = i9069[3]
  var i9072 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i9073.length; i += 2) {
  request.r(i9073[i + 0], i9073[i + 1], 1, i9072, '')
  }
  i9068.childGameObjects = i9072
  return i9068
}

Deserializers["Item"] = function (request, data, root) {
  var i9078 = root || request.c( 'Item' )
  var i9079 = data
  i9078.fxTypeOnPlace = i9079[0]
  i9078.id = i9079[1]
  i9078.currentState = i9079[2]
  i9078.itemHolderLayer = UnityEngine.LayerMask.FromIntegerValue( i9079[3] )
  request.r(i9079[4], i9079[5], 0, i9078, 'defaultShadow')
  i9078.returnToSlotOnMiss = !!i9079[6]
  i9078.hideShadowOnDrop = !!i9079[7]
  i9078.scaleOnSpawn = !!i9079[8]
  i9078.spawnScaleMultiplier = i9079[9]
  var i9081 = i9079[10]
  var i9080 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i9081.length; i += 2) {
  request.r(i9081[i + 0], i9081[i + 1], 1, i9080, '')
  }
  i9078.requiredItems = i9080
  request.r(i9079[11], i9079[12], 0, i9078, 'correctHolderTransform')
  request.r(i9079[13], i9079[14], 0, i9078, 'shadowOnHolder')
  i9078.canShowShadowHint = !!i9079[15]
  request.r(i9079[16], i9079[17], 0, i9078, 'homeSlot')
  i9078.waitingPosition = new pc.Vec3( i9079[18], i9079[19], i9079[20] )
  request.r(i9079[21], i9079[22], 0, i9078, 'spriteRenderer')
  return i9078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i9082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i9083 = data
  i9082.ambientIntensity = i9083[0]
  i9082.reflectionIntensity = i9083[1]
  i9082.ambientMode = i9083[2]
  i9082.ambientLight = new pc.Color(i9083[3], i9083[4], i9083[5], i9083[6])
  i9082.ambientSkyColor = new pc.Color(i9083[7], i9083[8], i9083[9], i9083[10])
  i9082.ambientGroundColor = new pc.Color(i9083[11], i9083[12], i9083[13], i9083[14])
  i9082.ambientEquatorColor = new pc.Color(i9083[15], i9083[16], i9083[17], i9083[18])
  i9082.fogColor = new pc.Color(i9083[19], i9083[20], i9083[21], i9083[22])
  i9082.fogEndDistance = i9083[23]
  i9082.fogStartDistance = i9083[24]
  i9082.fogDensity = i9083[25]
  i9082.fog = !!i9083[26]
  request.r(i9083[27], i9083[28], 0, i9082, 'skybox')
  i9082.fogMode = i9083[29]
  var i9085 = i9083[30]
  var i9084 = []
  for(var i = 0; i < i9085.length; i += 1) {
    i9084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i9085[i + 0]) );
  }
  i9082.lightmaps = i9084
  i9082.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i9083[31], i9082.lightProbes)
  i9082.lightmapsMode = i9083[32]
  i9082.mixedBakeMode = i9083[33]
  i9082.environmentLightingMode = i9083[34]
  i9082.ambientProbe = new pc.SphericalHarmonicsL2(i9083[35])
  i9082.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i9083[36])
  i9082.useReferenceAmbientProbe = !!i9083[37]
  request.r(i9083[38], i9083[39], 0, i9082, 'customReflection')
  request.r(i9083[40], i9083[41], 0, i9082, 'defaultReflection')
  i9082.defaultReflectionMode = i9083[42]
  i9082.defaultReflectionResolution = i9083[43]
  i9082.sunLightObjectId = i9083[44]
  i9082.pixelLightCount = i9083[45]
  i9082.defaultReflectionHDR = !!i9083[46]
  i9082.hasLightDataAsset = !!i9083[47]
  i9082.hasManualGenerate = !!i9083[48]
  return i9082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i9088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i9089 = data
  request.r(i9089[0], i9089[1], 0, i9088, 'lightmapColor')
  request.r(i9089[2], i9089[3], 0, i9088, 'lightmapDirection')
  request.r(i9089[4], i9089[5], 0, i9088, 'shadowMask')
  return i9088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i9090 = root || new UnityEngine.LightProbes()
  var i9091 = data
  return i9090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i9098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i9099 = data
  var i9101 = i9099[0]
  var i9100 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i9101.length; i += 1) {
    i9100.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i9101[i + 0]));
  }
  i9098.ShaderCompilationErrors = i9100
  i9098.name = i9099[1]
  i9098.guid = i9099[2]
  var i9103 = i9099[3]
  var i9102 = []
  for(var i = 0; i < i9103.length; i += 1) {
    i9102.push( i9103[i + 0] );
  }
  i9098.shaderDefinedKeywords = i9102
  var i9105 = i9099[4]
  var i9104 = []
  for(var i = 0; i < i9105.length; i += 1) {
    i9104.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i9105[i + 0]) );
  }
  i9098.passes = i9104
  var i9107 = i9099[5]
  var i9106 = []
  for(var i = 0; i < i9107.length; i += 1) {
    i9106.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i9107[i + 0]) );
  }
  i9098.usePasses = i9106
  var i9109 = i9099[6]
  var i9108 = []
  for(var i = 0; i < i9109.length; i += 1) {
    i9108.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i9109[i + 0]) );
  }
  i9098.defaultParameterValues = i9108
  request.r(i9099[7], i9099[8], 0, i9098, 'unityFallbackShader')
  i9098.readDepth = !!i9099[9]
  i9098.hasDepthOnlyPass = !!i9099[10]
  i9098.isCreatedByShaderGraph = !!i9099[11]
  i9098.disableBatching = !!i9099[12]
  i9098.compiled = !!i9099[13]
  return i9098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i9112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i9113 = data
  i9112.shaderName = i9113[0]
  i9112.errorMessage = i9113[1]
  return i9112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i9118 = root || new pc.UnityShaderPass()
  var i9119 = data
  i9118.id = i9119[0]
  i9118.subShaderIndex = i9119[1]
  i9118.name = i9119[2]
  i9118.passType = i9119[3]
  i9118.grabPassTextureName = i9119[4]
  i9118.usePass = !!i9119[5]
  i9118.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9119[6], i9118.zTest)
  i9118.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9119[7], i9118.zWrite)
  i9118.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9119[8], i9118.culling)
  i9118.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i9119[9], i9118.blending)
  i9118.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i9119[10], i9118.alphaBlending)
  i9118.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9119[11], i9118.colorWriteMask)
  i9118.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9119[12], i9118.offsetUnits)
  i9118.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9119[13], i9118.offsetFactor)
  i9118.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9119[14], i9118.stencilRef)
  i9118.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9119[15], i9118.stencilReadMask)
  i9118.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9119[16], i9118.stencilWriteMask)
  i9118.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i9119[17], i9118.stencilOp)
  i9118.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i9119[18], i9118.stencilOpFront)
  i9118.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i9119[19], i9118.stencilOpBack)
  var i9121 = i9119[20]
  var i9120 = []
  for(var i = 0; i < i9121.length; i += 1) {
    i9120.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i9121[i + 0]) );
  }
  i9118.tags = i9120
  var i9123 = i9119[21]
  var i9122 = []
  for(var i = 0; i < i9123.length; i += 1) {
    i9122.push( i9123[i + 0] );
  }
  i9118.passDefinedKeywords = i9122
  var i9125 = i9119[22]
  var i9124 = []
  for(var i = 0; i < i9125.length; i += 1) {
    i9124.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i9125[i + 0]) );
  }
  i9118.passDefinedKeywordGroups = i9124
  var i9127 = i9119[23]
  var i9126 = []
  for(var i = 0; i < i9127.length; i += 1) {
    i9126.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i9127[i + 0]) );
  }
  i9118.variants = i9126
  var i9129 = i9119[24]
  var i9128 = []
  for(var i = 0; i < i9129.length; i += 1) {
    i9128.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i9129[i + 0]) );
  }
  i9118.excludedVariants = i9128
  i9118.hasDepthReader = !!i9119[25]
  return i9118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i9130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i9131 = data
  i9130.val = i9131[0]
  i9130.name = i9131[1]
  return i9130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i9132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i9133 = data
  i9132.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9133[0], i9132.src)
  i9132.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9133[1], i9132.dst)
  i9132.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9133[2], i9132.op)
  return i9132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i9134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i9135 = data
  i9134.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9135[0], i9134.pass)
  i9134.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9135[1], i9134.fail)
  i9134.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9135[2], i9134.zFail)
  i9134.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9135[3], i9134.comp)
  return i9134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i9138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i9139 = data
  i9138.name = i9139[0]
  i9138.value = i9139[1]
  return i9138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i9142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i9143 = data
  var i9145 = i9143[0]
  var i9144 = []
  for(var i = 0; i < i9145.length; i += 1) {
    i9144.push( i9145[i + 0] );
  }
  i9142.keywords = i9144
  i9142.hasDiscard = !!i9143[1]
  return i9142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i9148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i9149 = data
  i9148.passId = i9149[0]
  i9148.subShaderIndex = i9149[1]
  var i9151 = i9149[2]
  var i9150 = []
  for(var i = 0; i < i9151.length; i += 1) {
    i9150.push( i9151[i + 0] );
  }
  i9148.keywords = i9150
  i9148.vertexProgram = i9149[3]
  i9148.fragmentProgram = i9149[4]
  i9148.exportedForWebGl2 = !!i9149[5]
  i9148.readDepth = !!i9149[6]
  return i9148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i9154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i9155 = data
  request.r(i9155[0], i9155[1], 0, i9154, 'shader')
  i9154.pass = i9155[2]
  return i9154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i9158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i9159 = data
  i9158.name = i9159[0]
  i9158.type = i9159[1]
  i9158.value = new pc.Vec4( i9159[2], i9159[3], i9159[4], i9159[5] )
  i9158.textureValue = i9159[6]
  i9158.shaderPropertyFlag = i9159[7]
  return i9158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i9160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i9161 = data
  i9160.name = i9161[0]
  request.r(i9161[1], i9161[2], 0, i9160, 'texture')
  i9160.aabb = i9161[3]
  i9160.vertices = i9161[4]
  i9160.triangles = i9161[5]
  i9160.textureRect = UnityEngine.Rect.MinMaxRect(i9161[6], i9161[7], i9161[8], i9161[9])
  i9160.packedRect = UnityEngine.Rect.MinMaxRect(i9161[10], i9161[11], i9161[12], i9161[13])
  i9160.border = new pc.Vec4( i9161[14], i9161[15], i9161[16], i9161[17] )
  i9160.transparency = i9161[18]
  i9160.bounds = i9161[19]
  i9160.pixelsPerUnit = i9161[20]
  i9160.textureWidth = i9161[21]
  i9160.textureHeight = i9161[22]
  i9160.nativeSize = new pc.Vec2( i9161[23], i9161[24] )
  i9160.pivot = new pc.Vec2( i9161[25], i9161[26] )
  i9160.textureRectOffset = new pc.Vec2( i9161[27], i9161[28] )
  return i9160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i9162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i9163 = data
  i9162.name = i9163[0]
  return i9162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i9164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i9165 = data
  i9164.name = i9165[0]
  i9164.wrapMode = i9165[1]
  i9164.isLooping = !!i9165[2]
  i9164.length = i9165[3]
  var i9167 = i9165[4]
  var i9166 = []
  for(var i = 0; i < i9167.length; i += 1) {
    i9166.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i9167[i + 0]) );
  }
  i9164.curves = i9166
  var i9169 = i9165[5]
  var i9168 = []
  for(var i = 0; i < i9169.length; i += 1) {
    i9168.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i9169[i + 0]) );
  }
  i9164.events = i9168
  i9164.halfPrecision = !!i9165[6]
  i9164._frameRate = i9165[7]
  i9164.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i9165[8], i9164.localBounds)
  i9164.hasMuscleCurves = !!i9165[9]
  var i9171 = i9165[10]
  var i9170 = []
  for(var i = 0; i < i9171.length; i += 1) {
    i9170.push( i9171[i + 0] );
  }
  i9164.clipMuscleConstant = i9170
  i9164.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i9165[11], i9164.clipBindingConstant)
  return i9164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i9174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i9175 = data
  i9174.path = i9175[0]
  i9174.hash = i9175[1]
  i9174.componentType = i9175[2]
  i9174.property = i9175[3]
  i9174.keys = i9175[4]
  var i9177 = i9175[5]
  var i9176 = []
  for(var i = 0; i < i9177.length; i += 1) {
    i9176.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i9177[i + 0]) );
  }
  i9174.objectReferenceKeys = i9176
  return i9174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i9180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i9181 = data
  i9180.time = i9181[0]
  request.r(i9181[1], i9181[2], 0, i9180, 'value')
  return i9180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i9184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i9185 = data
  i9184.functionName = i9185[0]
  i9184.floatParameter = i9185[1]
  i9184.intParameter = i9185[2]
  i9184.stringParameter = i9185[3]
  request.r(i9185[4], i9185[5], 0, i9184, 'objectReferenceParameter')
  i9184.time = i9185[6]
  return i9184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i9186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i9187 = data
  i9186.center = new pc.Vec3( i9187[0], i9187[1], i9187[2] )
  i9186.extends = new pc.Vec3( i9187[3], i9187[4], i9187[5] )
  return i9186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i9190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i9191 = data
  var i9193 = i9191[0]
  var i9192 = []
  for(var i = 0; i < i9193.length; i += 1) {
    i9192.push( i9193[i + 0] );
  }
  i9190.genericBindings = i9192
  var i9195 = i9191[1]
  var i9194 = []
  for(var i = 0; i < i9195.length; i += 1) {
    i9194.push( i9195[i + 0] );
  }
  i9190.pptrCurveMapping = i9194
  return i9190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i9196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i9197 = data
  i9196.name = i9197[0]
  var i9199 = i9197[1]
  var i9198 = []
  for(var i = 0; i < i9199.length; i += 1) {
    i9198.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i9199[i + 0]) );
  }
  i9196.layers = i9198
  var i9201 = i9197[2]
  var i9200 = []
  for(var i = 0; i < i9201.length; i += 1) {
    i9200.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i9201[i + 0]) );
  }
  i9196.parameters = i9200
  i9196.animationClips = i9197[3]
  i9196.avatarUnsupported = i9197[4]
  return i9196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i9204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i9205 = data
  i9204.name = i9205[0]
  i9204.defaultWeight = i9205[1]
  i9204.blendingMode = i9205[2]
  i9204.avatarMask = i9205[3]
  i9204.syncedLayerIndex = i9205[4]
  i9204.syncedLayerAffectsTiming = !!i9205[5]
  i9204.syncedLayers = i9205[6]
  i9204.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i9205[7], i9204.stateMachine)
  return i9204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i9206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i9207 = data
  i9206.id = i9207[0]
  i9206.name = i9207[1]
  i9206.path = i9207[2]
  var i9209 = i9207[3]
  var i9208 = []
  for(var i = 0; i < i9209.length; i += 1) {
    i9208.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i9209[i + 0]) );
  }
  i9206.states = i9208
  var i9211 = i9207[4]
  var i9210 = []
  for(var i = 0; i < i9211.length; i += 1) {
    i9210.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i9211[i + 0]) );
  }
  i9206.machines = i9210
  var i9213 = i9207[5]
  var i9212 = []
  for(var i = 0; i < i9213.length; i += 1) {
    i9212.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i9213[i + 0]) );
  }
  i9206.entryStateTransitions = i9212
  var i9215 = i9207[6]
  var i9214 = []
  for(var i = 0; i < i9215.length; i += 1) {
    i9214.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i9215[i + 0]) );
  }
  i9206.exitStateTransitions = i9214
  var i9217 = i9207[7]
  var i9216 = []
  for(var i = 0; i < i9217.length; i += 1) {
    i9216.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i9217[i + 0]) );
  }
  i9206.anyStateTransitions = i9216
  i9206.defaultStateId = i9207[8]
  return i9206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i9220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i9221 = data
  i9220.id = i9221[0]
  i9220.name = i9221[1]
  i9220.cycleOffset = i9221[2]
  i9220.cycleOffsetParameter = i9221[3]
  i9220.cycleOffsetParameterActive = !!i9221[4]
  i9220.mirror = !!i9221[5]
  i9220.mirrorParameter = i9221[6]
  i9220.mirrorParameterActive = !!i9221[7]
  i9220.motionId = i9221[8]
  i9220.nameHash = i9221[9]
  i9220.fullPathHash = i9221[10]
  i9220.speed = i9221[11]
  i9220.speedParameter = i9221[12]
  i9220.speedParameterActive = !!i9221[13]
  i9220.tag = i9221[14]
  i9220.tagHash = i9221[15]
  i9220.writeDefaultValues = !!i9221[16]
  var i9223 = i9221[17]
  var i9222 = []
  for(var i = 0; i < i9223.length; i += 2) {
  request.r(i9223[i + 0], i9223[i + 1], 2, i9222, '')
  }
  i9220.behaviours = i9222
  var i9225 = i9221[18]
  var i9224 = []
  for(var i = 0; i < i9225.length; i += 1) {
    i9224.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i9225[i + 0]) );
  }
  i9220.transitions = i9224
  return i9220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i9230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i9231 = data
  i9230.fullPath = i9231[0]
  i9230.canTransitionToSelf = !!i9231[1]
  i9230.duration = i9231[2]
  i9230.exitTime = i9231[3]
  i9230.hasExitTime = !!i9231[4]
  i9230.hasFixedDuration = !!i9231[5]
  i9230.interruptionSource = i9231[6]
  i9230.offset = i9231[7]
  i9230.orderedInterruption = !!i9231[8]
  i9230.destinationStateId = i9231[9]
  i9230.isExit = !!i9231[10]
  i9230.mute = !!i9231[11]
  i9230.solo = !!i9231[12]
  var i9233 = i9231[13]
  var i9232 = []
  for(var i = 0; i < i9233.length; i += 1) {
    i9232.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i9233[i + 0]) );
  }
  i9230.conditions = i9232
  return i9230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i9238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i9239 = data
  i9238.destinationStateId = i9239[0]
  i9238.isExit = !!i9239[1]
  i9238.mute = !!i9239[2]
  i9238.solo = !!i9239[3]
  var i9241 = i9239[4]
  var i9240 = []
  for(var i = 0; i < i9241.length; i += 1) {
    i9240.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i9241[i + 0]) );
  }
  i9238.conditions = i9240
  return i9238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i9244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i9245 = data
  i9244.defaultBool = !!i9245[0]
  i9244.defaultFloat = i9245[1]
  i9244.defaultInt = i9245[2]
  i9244.name = i9245[3]
  i9244.nameHash = i9245[4]
  i9244.type = i9245[5]
  return i9244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i9246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i9247 = data
  i9246.name = i9247[0]
  i9246.bytes64 = i9247[1]
  i9246.data = i9247[2]
  return i9246
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i9248 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i9249 = data
  i9248.normalStyle = i9249[0]
  i9248.normalSpacingOffset = i9249[1]
  i9248.boldStyle = i9249[2]
  i9248.boldSpacing = i9249[3]
  i9248.italicStyle = i9249[4]
  i9248.tabSize = i9249[5]
  request.r(i9249[6], i9249[7], 0, i9248, 'atlas')
  i9248.m_SourceFontFileGUID = i9249[8]
  i9248.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i9249[9], i9248.m_CreationSettings)
  request.r(i9249[10], i9249[11], 0, i9248, 'm_SourceFontFile')
  i9248.m_SourceFontFilePath = i9249[12]
  i9248.m_AtlasPopulationMode = i9249[13]
  i9248.InternalDynamicOS = !!i9249[14]
  var i9251 = i9249[15]
  var i9250 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i9251.length; i += 1) {
    i9250.add(request.d('UnityEngine.TextCore.Glyph', i9251[i + 0]));
  }
  i9248.m_GlyphTable = i9250
  var i9253 = i9249[16]
  var i9252 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i9253.length; i += 1) {
    i9252.add(request.d('TMPro.TMP_Character', i9253[i + 0]));
  }
  i9248.m_CharacterTable = i9252
  var i9255 = i9249[17]
  var i9254 = []
  for(var i = 0; i < i9255.length; i += 2) {
  request.r(i9255[i + 0], i9255[i + 1], 2, i9254, '')
  }
  i9248.m_AtlasTextures = i9254
  i9248.m_AtlasTextureIndex = i9249[18]
  i9248.m_IsMultiAtlasTexturesEnabled = !!i9249[19]
  i9248.m_GetFontFeatures = !!i9249[20]
  i9248.m_ClearDynamicDataOnBuild = !!i9249[21]
  i9248.m_AtlasWidth = i9249[22]
  i9248.m_AtlasHeight = i9249[23]
  i9248.m_AtlasPadding = i9249[24]
  i9248.m_AtlasRenderMode = i9249[25]
  var i9257 = i9249[26]
  var i9256 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i9257.length; i += 1) {
    i9256.add(request.d('UnityEngine.TextCore.GlyphRect', i9257[i + 0]));
  }
  i9248.m_UsedGlyphRects = i9256
  var i9259 = i9249[27]
  var i9258 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i9259.length; i += 1) {
    i9258.add(request.d('UnityEngine.TextCore.GlyphRect', i9259[i + 0]));
  }
  i9248.m_FreeGlyphRects = i9258
  i9248.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i9249[28], i9248.m_FontFeatureTable)
  i9248.m_ShouldReimportFontFeatures = !!i9249[29]
  var i9261 = i9249[30]
  var i9260 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i9261.length; i += 2) {
  request.r(i9261[i + 0], i9261[i + 1], 1, i9260, '')
  }
  i9248.m_FallbackFontAssetTable = i9260
  var i9263 = i9249[31]
  var i9262 = []
  for(var i = 0; i < i9263.length; i += 1) {
    i9262.push( request.d('TMPro.TMP_FontWeightPair', i9263[i + 0]) );
  }
  i9248.m_FontWeightTable = i9262
  var i9265 = i9249[32]
  var i9264 = []
  for(var i = 0; i < i9265.length; i += 1) {
    i9264.push( request.d('TMPro.TMP_FontWeightPair', i9265[i + 0]) );
  }
  i9248.fontWeights = i9264
  i9248.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i9249[33], i9248.m_fontInfo)
  var i9267 = i9249[34]
  var i9266 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i9267.length; i += 1) {
    i9266.add(request.d('TMPro.TMP_Glyph', i9267[i + 0]));
  }
  i9248.m_glyphInfoList = i9266
  i9248.m_KerningTable = request.d('TMPro.KerningTable', i9249[35], i9248.m_KerningTable)
  var i9269 = i9249[36]
  var i9268 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i9269.length; i += 2) {
  request.r(i9269[i + 0], i9269[i + 1], 1, i9268, '')
  }
  i9248.fallbackFontAssets = i9268
  i9248.m_Version = i9249[37]
  i9248.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i9249[38], i9248.m_FaceInfo)
  request.r(i9249[39], i9249[40], 0, i9248, 'm_Material')
  return i9248
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i9270 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i9271 = data
  i9270.sourceFontFileName = i9271[0]
  i9270.sourceFontFileGUID = i9271[1]
  i9270.faceIndex = i9271[2]
  i9270.pointSizeSamplingMode = i9271[3]
  i9270.pointSize = i9271[4]
  i9270.padding = i9271[5]
  i9270.paddingMode = i9271[6]
  i9270.packingMode = i9271[7]
  i9270.atlasWidth = i9271[8]
  i9270.atlasHeight = i9271[9]
  i9270.characterSetSelectionMode = i9271[10]
  i9270.characterSequence = i9271[11]
  i9270.referencedFontAssetGUID = i9271[12]
  i9270.referencedTextAssetGUID = i9271[13]
  i9270.fontStyle = i9271[14]
  i9270.fontStyleModifier = i9271[15]
  i9270.renderMode = i9271[16]
  i9270.includeFontFeatures = !!i9271[17]
  return i9270
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i9274 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i9275 = data
  i9274.m_Index = i9275[0]
  i9274.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i9275[1], i9274.m_Metrics)
  i9274.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i9275[2], i9274.m_GlyphRect)
  i9274.m_Scale = i9275[3]
  i9274.m_AtlasIndex = i9275[4]
  i9274.m_ClassDefinitionType = i9275[5]
  return i9274
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i9276 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i9277 = data
  i9276.m_Width = i9277[0]
  i9276.m_Height = i9277[1]
  i9276.m_HorizontalBearingX = i9277[2]
  i9276.m_HorizontalBearingY = i9277[3]
  i9276.m_HorizontalAdvance = i9277[4]
  return i9276
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i9278 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i9279 = data
  i9278.m_X = i9279[0]
  i9278.m_Y = i9279[1]
  i9278.m_Width = i9279[2]
  i9278.m_Height = i9279[3]
  return i9278
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i9282 = root || request.c( 'TMPro.TMP_Character' )
  var i9283 = data
  i9282.m_ElementType = i9283[0]
  i9282.m_Unicode = i9283[1]
  i9282.m_GlyphIndex = i9283[2]
  i9282.m_Scale = i9283[3]
  return i9282
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i9288 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i9289 = data
  var i9291 = i9289[0]
  var i9290 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i9291.length; i += 1) {
    i9290.add(request.d('TMPro.MultipleSubstitutionRecord', i9291[i + 0]));
  }
  i9288.m_MultipleSubstitutionRecords = i9290
  var i9293 = i9289[1]
  var i9292 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i9293.length; i += 1) {
    i9292.add(request.d('TMPro.LigatureSubstitutionRecord', i9293[i + 0]));
  }
  i9288.m_LigatureSubstitutionRecords = i9292
  var i9295 = i9289[2]
  var i9294 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i9295.length; i += 1) {
    i9294.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i9295[i + 0]));
  }
  i9288.m_GlyphPairAdjustmentRecords = i9294
  var i9297 = i9289[3]
  var i9296 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i9297.length; i += 1) {
    i9296.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i9297[i + 0]));
  }
  i9288.m_MarkToBaseAdjustmentRecords = i9296
  var i9299 = i9289[4]
  var i9298 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i9299.length; i += 1) {
    i9298.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i9299[i + 0]));
  }
  i9288.m_MarkToMarkAdjustmentRecords = i9298
  return i9288
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i9302 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i9303 = data
  i9302.m_TargetGlyphID = i9303[0]
  i9302.m_SubstituteGlyphIDs = i9303[1]
  return i9302
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i9306 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i9307 = data
  i9306.m_ComponentGlyphIDs = i9307[0]
  i9306.m_LigatureGlyphID = i9307[1]
  return i9306
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i9310 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i9311 = data
  i9310.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i9311[0], i9310.m_FirstAdjustmentRecord)
  i9310.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i9311[1], i9310.m_SecondAdjustmentRecord)
  i9310.m_FeatureLookupFlags = i9311[2]
  return i9310
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i9314 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i9315 = data
  i9314.m_BaseGlyphID = i9315[0]
  i9314.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i9315[1], i9314.m_BaseGlyphAnchorPoint)
  i9314.m_MarkGlyphID = i9315[2]
  i9314.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i9315[3], i9314.m_MarkPositionAdjustment)
  return i9314
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i9318 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i9319 = data
  i9318.m_BaseMarkGlyphID = i9319[0]
  i9318.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i9319[1], i9318.m_BaseMarkGlyphAnchorPoint)
  i9318.m_CombiningMarkGlyphID = i9319[2]
  i9318.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i9319[3], i9318.m_CombiningMarkPositionAdjustment)
  return i9318
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i9324 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i9325 = data
  request.r(i9325[0], i9325[1], 0, i9324, 'regularTypeface')
  request.r(i9325[2], i9325[3], 0, i9324, 'italicTypeface')
  return i9324
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i9326 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i9327 = data
  i9326.Name = i9327[0]
  i9326.PointSize = i9327[1]
  i9326.Scale = i9327[2]
  i9326.CharacterCount = i9327[3]
  i9326.LineHeight = i9327[4]
  i9326.Baseline = i9327[5]
  i9326.Ascender = i9327[6]
  i9326.CapHeight = i9327[7]
  i9326.Descender = i9327[8]
  i9326.CenterLine = i9327[9]
  i9326.SuperscriptOffset = i9327[10]
  i9326.SubscriptOffset = i9327[11]
  i9326.SubSize = i9327[12]
  i9326.Underline = i9327[13]
  i9326.UnderlineThickness = i9327[14]
  i9326.strikethrough = i9327[15]
  i9326.strikethroughThickness = i9327[16]
  i9326.TabWidth = i9327[17]
  i9326.Padding = i9327[18]
  i9326.AtlasWidth = i9327[19]
  i9326.AtlasHeight = i9327[20]
  return i9326
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i9330 = root || request.c( 'TMPro.TMP_Glyph' )
  var i9331 = data
  i9330.id = i9331[0]
  i9330.x = i9331[1]
  i9330.y = i9331[2]
  i9330.width = i9331[3]
  i9330.height = i9331[4]
  i9330.xOffset = i9331[5]
  i9330.yOffset = i9331[6]
  i9330.xAdvance = i9331[7]
  i9330.scale = i9331[8]
  return i9330
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i9332 = root || request.c( 'TMPro.KerningTable' )
  var i9333 = data
  var i9335 = i9333[0]
  var i9334 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i9335.length; i += 1) {
    i9334.add(request.d('TMPro.KerningPair', i9335[i + 0]));
  }
  i9332.kerningPairs = i9334
  return i9332
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i9338 = root || request.c( 'TMPro.KerningPair' )
  var i9339 = data
  i9338.xOffset = i9339[0]
  i9338.m_FirstGlyph = i9339[1]
  i9338.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i9339[2], i9338.m_FirstGlyphAdjustments)
  i9338.m_SecondGlyph = i9339[3]
  i9338.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i9339[4], i9338.m_SecondGlyphAdjustments)
  i9338.m_IgnoreSpacingAdjustments = !!i9339[5]
  return i9338
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i9340 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i9341 = data
  i9340.m_FaceIndex = i9341[0]
  i9340.m_FamilyName = i9341[1]
  i9340.m_StyleName = i9341[2]
  i9340.m_PointSize = i9341[3]
  i9340.m_Scale = i9341[4]
  i9340.m_UnitsPerEM = i9341[5]
  i9340.m_LineHeight = i9341[6]
  i9340.m_AscentLine = i9341[7]
  i9340.m_CapLine = i9341[8]
  i9340.m_MeanLine = i9341[9]
  i9340.m_Baseline = i9341[10]
  i9340.m_DescentLine = i9341[11]
  i9340.m_SuperscriptOffset = i9341[12]
  i9340.m_SuperscriptSize = i9341[13]
  i9340.m_SubscriptOffset = i9341[14]
  i9340.m_SubscriptSize = i9341[15]
  i9340.m_UnderlineOffset = i9341[16]
  i9340.m_UnderlineThickness = i9341[17]
  i9340.m_StrikethroughOffset = i9341[18]
  i9340.m_StrikethroughThickness = i9341[19]
  i9340.m_TabWidth = i9341[20]
  return i9340
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i9342 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i9343 = data
  i9342.useSafeMode = !!i9343[0]
  i9342.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i9343[1], i9342.safeModeOptions)
  i9342.timeScale = i9343[2]
  i9342.unscaledTimeScale = i9343[3]
  i9342.useSmoothDeltaTime = !!i9343[4]
  i9342.maxSmoothUnscaledTime = i9343[5]
  i9342.rewindCallbackMode = i9343[6]
  i9342.showUnityEditorReport = !!i9343[7]
  i9342.logBehaviour = i9343[8]
  i9342.drawGizmos = !!i9343[9]
  i9342.defaultRecyclable = !!i9343[10]
  i9342.defaultAutoPlay = i9343[11]
  i9342.defaultUpdateType = i9343[12]
  i9342.defaultTimeScaleIndependent = !!i9343[13]
  i9342.defaultEaseType = i9343[14]
  i9342.defaultEaseOvershootOrAmplitude = i9343[15]
  i9342.defaultEasePeriod = i9343[16]
  i9342.defaultAutoKill = !!i9343[17]
  i9342.defaultLoopType = i9343[18]
  i9342.debugMode = !!i9343[19]
  i9342.debugStoreTargetId = !!i9343[20]
  i9342.showPreviewPanel = !!i9343[21]
  i9342.storeSettingsLocation = i9343[22]
  i9342.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i9343[23], i9342.modules)
  i9342.createASMDEF = !!i9343[24]
  i9342.showPlayingTweens = !!i9343[25]
  i9342.showPausedTweens = !!i9343[26]
  return i9342
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i9344 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i9345 = data
  i9344.logBehaviour = i9345[0]
  i9344.nestedTweenFailureBehaviour = i9345[1]
  return i9344
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i9346 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i9347 = data
  i9346.showPanel = !!i9347[0]
  i9346.audioEnabled = !!i9347[1]
  i9346.physicsEnabled = !!i9347[2]
  i9346.physics2DEnabled = !!i9347[3]
  i9346.spriteEnabled = !!i9347[4]
  i9346.uiEnabled = !!i9347[5]
  i9346.uiToolkitEnabled = !!i9347[6]
  i9346.textMeshProEnabled = !!i9347[7]
  i9346.tk2DEnabled = !!i9347[8]
  i9346.deAudioEnabled = !!i9347[9]
  i9346.deUnityExtendedEnabled = !!i9347[10]
  i9346.epoOutlineEnabled = !!i9347[11]
  return i9346
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i9348 = root || request.c( 'TMPro.TMP_Settings' )
  var i9349 = data
  i9348.assetVersion = i9349[0]
  i9348.m_TextWrappingMode = i9349[1]
  i9348.m_enableKerning = !!i9349[2]
  var i9351 = i9349[3]
  var i9350 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i9351.length; i += 1) {
    i9350.add(i9351[i + 0]);
  }
  i9348.m_ActiveFontFeatures = i9350
  i9348.m_enableExtraPadding = !!i9349[4]
  i9348.m_enableTintAllSprites = !!i9349[5]
  i9348.m_enableParseEscapeCharacters = !!i9349[6]
  i9348.m_EnableRaycastTarget = !!i9349[7]
  i9348.m_GetFontFeaturesAtRuntime = !!i9349[8]
  i9348.m_missingGlyphCharacter = i9349[9]
  i9348.m_ClearDynamicDataOnBuild = !!i9349[10]
  i9348.m_warningsDisabled = !!i9349[11]
  request.r(i9349[12], i9349[13], 0, i9348, 'm_defaultFontAsset')
  i9348.m_defaultFontAssetPath = i9349[14]
  i9348.m_defaultFontSize = i9349[15]
  i9348.m_defaultAutoSizeMinRatio = i9349[16]
  i9348.m_defaultAutoSizeMaxRatio = i9349[17]
  i9348.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i9349[18], i9349[19] )
  i9348.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i9349[20], i9349[21] )
  i9348.m_autoSizeTextContainer = !!i9349[22]
  i9348.m_IsTextObjectScaleStatic = !!i9349[23]
  var i9353 = i9349[24]
  var i9352 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i9353.length; i += 2) {
  request.r(i9353[i + 0], i9353[i + 1], 1, i9352, '')
  }
  i9348.m_fallbackFontAssets = i9352
  i9348.m_matchMaterialPreset = !!i9349[25]
  i9348.m_HideSubTextObjects = !!i9349[26]
  request.r(i9349[27], i9349[28], 0, i9348, 'm_defaultSpriteAsset')
  i9348.m_defaultSpriteAssetPath = i9349[29]
  i9348.m_enableEmojiSupport = !!i9349[30]
  i9348.m_MissingCharacterSpriteUnicode = i9349[31]
  var i9355 = i9349[32]
  var i9354 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i9355.length; i += 2) {
  request.r(i9355[i + 0], i9355[i + 1], 1, i9354, '')
  }
  i9348.m_EmojiFallbackTextAssets = i9354
  i9348.m_defaultColorGradientPresetsPath = i9349[33]
  request.r(i9349[34], i9349[35], 0, i9348, 'm_defaultStyleSheet')
  i9348.m_StyleSheetsResourcePath = i9349[36]
  request.r(i9349[37], i9349[38], 0, i9348, 'm_leadingCharacters')
  request.r(i9349[39], i9349[40], 0, i9348, 'm_followingCharacters')
  i9348.m_UseModernHangulLineBreakingRules = !!i9349[41]
  return i9348
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i9358 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i9359 = data
  request.r(i9359[0], i9359[1], 0, i9358, 'spriteSheet')
  var i9361 = i9359[2]
  var i9360 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i9361.length; i += 1) {
    i9360.add(request.d('TMPro.TMP_Sprite', i9361[i + 0]));
  }
  i9358.spriteInfoList = i9360
  var i9363 = i9359[3]
  var i9362 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i9363.length; i += 2) {
  request.r(i9363[i + 0], i9363[i + 1], 1, i9362, '')
  }
  i9358.fallbackSpriteAssets = i9362
  var i9365 = i9359[4]
  var i9364 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i9365.length; i += 1) {
    i9364.add(request.d('TMPro.TMP_SpriteCharacter', i9365[i + 0]));
  }
  i9358.m_SpriteCharacterTable = i9364
  var i9367 = i9359[5]
  var i9366 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i9367.length; i += 1) {
    i9366.add(request.d('TMPro.TMP_SpriteGlyph', i9367[i + 0]));
  }
  i9358.m_GlyphTable = i9366
  i9358.m_Version = i9359[6]
  i9358.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i9359[7], i9358.m_FaceInfo)
  request.r(i9359[8], i9359[9], 0, i9358, 'm_Material')
  return i9358
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i9370 = root || request.c( 'TMPro.TMP_Sprite' )
  var i9371 = data
  i9370.name = i9371[0]
  i9370.hashCode = i9371[1]
  i9370.unicode = i9371[2]
  i9370.pivot = new pc.Vec2( i9371[3], i9371[4] )
  request.r(i9371[5], i9371[6], 0, i9370, 'sprite')
  i9370.id = i9371[7]
  i9370.x = i9371[8]
  i9370.y = i9371[9]
  i9370.width = i9371[10]
  i9370.height = i9371[11]
  i9370.xOffset = i9371[12]
  i9370.yOffset = i9371[13]
  i9370.xAdvance = i9371[14]
  i9370.scale = i9371[15]
  return i9370
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i9376 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i9377 = data
  i9376.m_Name = i9377[0]
  i9376.m_ElementType = i9377[1]
  i9376.m_Unicode = i9377[2]
  i9376.m_GlyphIndex = i9377[3]
  i9376.m_Scale = i9377[4]
  return i9376
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i9380 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i9381 = data
  request.r(i9381[0], i9381[1], 0, i9380, 'sprite')
  i9380.m_Index = i9381[2]
  i9380.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i9381[3], i9380.m_Metrics)
  i9380.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i9381[4], i9380.m_GlyphRect)
  i9380.m_Scale = i9381[5]
  i9380.m_AtlasIndex = i9381[6]
  i9380.m_ClassDefinitionType = i9381[7]
  return i9380
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i9382 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i9383 = data
  var i9385 = i9383[0]
  var i9384 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i9385.length; i += 1) {
    i9384.add(request.d('TMPro.TMP_Style', i9385[i + 0]));
  }
  i9382.m_StyleList = i9384
  return i9382
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i9388 = root || request.c( 'TMPro.TMP_Style' )
  var i9389 = data
  i9388.m_Name = i9389[0]
  i9388.m_HashCode = i9389[1]
  i9388.m_OpeningDefinition = i9389[2]
  i9388.m_ClosingDefinition = i9389[3]
  i9388.m_OpeningTagArray = i9389[4]
  i9388.m_ClosingTagArray = i9389[5]
  return i9388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i9390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i9391 = data
  var i9393 = i9391[0]
  var i9392 = []
  for(var i = 0; i < i9393.length; i += 1) {
    i9392.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i9393[i + 0]) );
  }
  i9390.files = i9392
  i9390.componentToPrefabIds = i9391[1]
  return i9390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i9396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i9397 = data
  i9396.path = i9397[0]
  request.r(i9397[1], i9397[2], 0, i9396, 'unityObject')
  return i9396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i9398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i9399 = data
  var i9401 = i9399[0]
  var i9400 = []
  for(var i = 0; i < i9401.length; i += 1) {
    i9400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i9401[i + 0]) );
  }
  i9398.scriptsExecutionOrder = i9400
  var i9403 = i9399[1]
  var i9402 = []
  for(var i = 0; i < i9403.length; i += 1) {
    i9402.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i9403[i + 0]) );
  }
  i9398.sortingLayers = i9402
  var i9405 = i9399[2]
  var i9404 = []
  for(var i = 0; i < i9405.length; i += 1) {
    i9404.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i9405[i + 0]) );
  }
  i9398.cullingLayers = i9404
  i9398.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i9399[3], i9398.timeSettings)
  i9398.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i9399[4], i9398.physicsSettings)
  i9398.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i9399[5], i9398.physics2DSettings)
  i9398.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i9399[6], i9398.qualitySettings)
  i9398.enableRealtimeShadows = !!i9399[7]
  i9398.enableAutoInstancing = !!i9399[8]
  i9398.enableStaticBatching = !!i9399[9]
  i9398.enableDynamicBatching = !!i9399[10]
  i9398.lightmapEncodingQuality = i9399[11]
  i9398.desiredColorSpace = i9399[12]
  var i9407 = i9399[13]
  var i9406 = []
  for(var i = 0; i < i9407.length; i += 1) {
    i9406.push( i9407[i + 0] );
  }
  i9398.allTags = i9406
  return i9398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i9410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i9411 = data
  i9410.name = i9411[0]
  i9410.value = i9411[1]
  return i9410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i9414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i9415 = data
  i9414.id = i9415[0]
  i9414.name = i9415[1]
  i9414.value = i9415[2]
  return i9414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i9418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i9419 = data
  i9418.id = i9419[0]
  i9418.name = i9419[1]
  return i9418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i9420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i9421 = data
  i9420.fixedDeltaTime = i9421[0]
  i9420.maximumDeltaTime = i9421[1]
  i9420.timeScale = i9421[2]
  i9420.maximumParticleTimestep = i9421[3]
  return i9420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i9422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i9423 = data
  i9422.gravity = new pc.Vec3( i9423[0], i9423[1], i9423[2] )
  i9422.defaultSolverIterations = i9423[3]
  i9422.bounceThreshold = i9423[4]
  i9422.autoSyncTransforms = !!i9423[5]
  i9422.autoSimulation = !!i9423[6]
  var i9425 = i9423[7]
  var i9424 = []
  for(var i = 0; i < i9425.length; i += 1) {
    i9424.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i9425[i + 0]) );
  }
  i9422.collisionMatrix = i9424
  return i9422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i9428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i9429 = data
  i9428.enabled = !!i9429[0]
  i9428.layerId = i9429[1]
  i9428.otherLayerId = i9429[2]
  return i9428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i9430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i9431 = data
  request.r(i9431[0], i9431[1], 0, i9430, 'material')
  i9430.gravity = new pc.Vec2( i9431[2], i9431[3] )
  i9430.positionIterations = i9431[4]
  i9430.velocityIterations = i9431[5]
  i9430.velocityThreshold = i9431[6]
  i9430.maxLinearCorrection = i9431[7]
  i9430.maxAngularCorrection = i9431[8]
  i9430.maxTranslationSpeed = i9431[9]
  i9430.maxRotationSpeed = i9431[10]
  i9430.baumgarteScale = i9431[11]
  i9430.baumgarteTOIScale = i9431[12]
  i9430.timeToSleep = i9431[13]
  i9430.linearSleepTolerance = i9431[14]
  i9430.angularSleepTolerance = i9431[15]
  i9430.defaultContactOffset = i9431[16]
  i9430.autoSimulation = !!i9431[17]
  i9430.queriesHitTriggers = !!i9431[18]
  i9430.queriesStartInColliders = !!i9431[19]
  i9430.callbacksOnDisable = !!i9431[20]
  i9430.reuseCollisionCallbacks = !!i9431[21]
  i9430.autoSyncTransforms = !!i9431[22]
  var i9433 = i9431[23]
  var i9432 = []
  for(var i = 0; i < i9433.length; i += 1) {
    i9432.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i9433[i + 0]) );
  }
  i9430.collisionMatrix = i9432
  return i9430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i9436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i9437 = data
  i9436.enabled = !!i9437[0]
  i9436.layerId = i9437[1]
  i9436.otherLayerId = i9437[2]
  return i9436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i9438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i9439 = data
  var i9441 = i9439[0]
  var i9440 = []
  for(var i = 0; i < i9441.length; i += 1) {
    i9440.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i9441[i + 0]) );
  }
  i9438.qualityLevels = i9440
  var i9443 = i9439[1]
  var i9442 = []
  for(var i = 0; i < i9443.length; i += 1) {
    i9442.push( i9443[i + 0] );
  }
  i9438.names = i9442
  i9438.shadows = i9439[2]
  i9438.anisotropicFiltering = i9439[3]
  i9438.antiAliasing = i9439[4]
  i9438.lodBias = i9439[5]
  i9438.shadowCascades = i9439[6]
  i9438.shadowDistance = i9439[7]
  i9438.shadowmaskMode = i9439[8]
  i9438.shadowProjection = i9439[9]
  i9438.shadowResolution = i9439[10]
  i9438.softParticles = !!i9439[11]
  i9438.softVegetation = !!i9439[12]
  i9438.activeColorSpace = i9439[13]
  i9438.desiredColorSpace = i9439[14]
  i9438.masterTextureLimit = i9439[15]
  i9438.maxQueuedFrames = i9439[16]
  i9438.particleRaycastBudget = i9439[17]
  i9438.pixelLightCount = i9439[18]
  i9438.realtimeReflectionProbes = !!i9439[19]
  i9438.shadowCascade2Split = i9439[20]
  i9438.shadowCascade4Split = new pc.Vec3( i9439[21], i9439[22], i9439[23] )
  i9438.streamingMipmapsActive = !!i9439[24]
  i9438.vSyncCount = i9439[25]
  i9438.asyncUploadBufferSize = i9439[26]
  i9438.asyncUploadTimeSlice = i9439[27]
  i9438.billboardsFaceCameraPosition = !!i9439[28]
  i9438.shadowNearPlaneOffset = i9439[29]
  i9438.streamingMipmapsMemoryBudget = i9439[30]
  i9438.maximumLODLevel = i9439[31]
  i9438.streamingMipmapsAddAllCameras = !!i9439[32]
  i9438.streamingMipmapsMaxLevelReduction = i9439[33]
  i9438.streamingMipmapsRenderersPerFrame = i9439[34]
  i9438.resolutionScalingFixedDPIFactor = i9439[35]
  i9438.streamingMipmapsMaxFileIORequests = i9439[36]
  i9438.currentQualityLevel = i9439[37]
  return i9438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i9448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i9449 = data
  i9448.weight = i9449[0]
  i9448.vertices = i9449[1]
  i9448.normals = i9449[2]
  i9448.tangents = i9449[3]
  return i9448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i9452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i9453 = data
  i9452.mode = i9453[0]
  i9452.parameter = i9453[1]
  i9452.threshold = i9453[2]
  return i9452
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i9454 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i9455 = data
  i9454.m_GlyphIndex = i9455[0]
  i9454.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i9455[1], i9454.m_GlyphValueRecord)
  return i9454
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i9456 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i9457 = data
  i9456.m_XCoordinate = i9457[0]
  i9456.m_YCoordinate = i9457[1]
  return i9456
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i9458 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i9459 = data
  i9458.m_XPositionAdjustment = i9459[0]
  i9458.m_YPositionAdjustment = i9459[1]
  return i9458
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i9460 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i9461 = data
  i9460.xPlacement = i9461[0]
  i9460.yPlacement = i9461[1]
  i9460.xAdvance = i9461[2]
  i9460.yAdvance = i9461[3]
  return i9460
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i9462 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i9463 = data
  i9462.m_XPlacement = i9463[0]
  i9462.m_YPlacement = i9463[1]
  i9462.m_XAdvance = i9463[2]
  i9462.m_YAdvance = i9463[3]
  return i9462
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"enabled":21},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"51":[52],"53":[52],"54":[52],"55":[52],"56":[52],"57":[52],"58":[59],"60":[33],"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[69],"70":[69],"71":[69],"72":[69],"73":[69],"74":[69],"75":[69],"76":[69],"77":[69],"78":[69],"79":[69],"80":[69],"81":[69],"82":[33],"83":[84],"85":[86],"87":[86],"11":[10],"88":[89],"90":[91],"92":[84,93],"94":[91],"95":[94],"96":[91],"97":[91],"98":[99],"100":[99],"101":[91],"102":[10],"103":[17,10],"104":[84],"105":[17,10],"106":[15,84],"91":[84],"107":[84,93],"108":[62],"109":[69],"110":[111],"112":[99],"113":[42],"114":[33],"115":[116],"117":[40],"118":[11],"119":[10],"120":[84,10],"18":[10,17],"121":[10],"122":[17,10],"123":[84],"124":[17,10],"125":[10],"126":[127],"128":[127],"129":[127],"130":[10],"131":[10],"14":[11],"21":[17,10],"132":[10],"13":[11],"133":[10],"134":[10],"135":[10],"136":[10],"137":[10],"138":[10],"139":[10],"140":[10],"141":[10],"142":[17,10],"143":[10],"144":[10],"145":[10],"20":[10],"146":[17,10],"147":[10],"148":[40],"149":[40],"41":[40],"150":[40],"151":[33],"152":[33]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","MergeEffect","UnityEngine.Mesh","BlinkEffect","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.CanvasRenderer","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Slider","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Button","GameManager","Ply_Pool","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEditor.Audio.AudioMixerGroupController","ItemSpawnManager","UnityEngine.GameObject","UIManager","UnityEngine.Camera","InputManager","ItemSetupTool","CameraController","Item","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.SpriteRenderer","ItemHolder","UnityEngine.BoxCollider","PSD_Tool","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.Examples.BasicPlatformerController","UnityEngine.CharacterController","Spine.Unity.Examples.SkeletonGhost","Spine.Unity.SkeletonRenderer","Spine.Unity.Examples.RenderExistingMesh","UnityEngine.MeshFilter","Spine.Unity.Examples.SkeletonRenderTexture","Spine.Unity.Examples.SkeletonRenderTextureFadeout","Spine.Unity.Examples.SkeletonRagdoll","Spine.Unity.Examples.SkeletonRagdoll2D","Spine.Unity.Examples.SkeletonUtilityEyeConstraint","Spine.Unity.SkeletonUtilityBone","Spine.Unity.Examples.SkeletonUtilityGroundConstraint","Spine.Unity.Examples.SpineGauge","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "DreamyRoom";

Deserializers.lunaInitializationTime = "07/17/2026 09:46:11";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "PLY_PerfectTidy_V132";

Deserializers.lunaAppID = "26861";

Deserializers.projectId = "54ab6df5d24ca13458b7b8f24e7d8130";

Deserializers.packagesInfo = "com.unity.inputsystem: 1.13.0\ncom.unity.timeline: 1.8.7\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "True";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1848";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5181";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2D-Project";

Deserializers.disableAntiAliasing = false;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "d0cc82e7-dc54-4e27-a249-f2ef45eb4ce5";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

