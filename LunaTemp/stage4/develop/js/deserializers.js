var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.JointSpring' )
  var i729 = data
  i728.spring = i729[0]
  i728.damper = i729[1]
  i728.targetPosition = i729[2]
  return i728
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i730 = root || request.c( 'UnityEngine.JointMotor' )
  var i731 = data
  i730.m_TargetVelocity = i731[0]
  i730.m_Force = i731[1]
  i730.m_FreeSpin = i731[2]
  return i730
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.JointLimits' )
  var i733 = data
  i732.m_Min = i733[0]
  i732.m_Max = i733[1]
  i732.m_Bounciness = i733[2]
  i732.m_BounceMinVelocity = i733[3]
  i732.m_ContactDistance = i733[4]
  i732.minBounce = i733[5]
  i732.maxBounce = i733[6]
  return i732
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.JointDrive' )
  var i735 = data
  i734.m_PositionSpring = i735[0]
  i734.m_PositionDamper = i735[1]
  i734.m_MaximumForce = i735[2]
  i734.m_UseAcceleration = i735[3]
  return i734
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i736 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i737 = data
  i736.m_Spring = i737[0]
  i736.m_Damper = i737[1]
  return i736
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i739 = data
  i738.m_Limit = i739[0]
  i738.m_Bounciness = i739[1]
  i738.m_ContactDistance = i739[2]
  return i738
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i741 = data
  i740.m_ExtremumSlip = i741[0]
  i740.m_ExtremumValue = i741[1]
  i740.m_AsymptoteSlip = i741[2]
  i740.m_AsymptoteValue = i741[3]
  i740.m_Stiffness = i741[4]
  return i740
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i743 = data
  i742.m_LowerAngle = i743[0]
  i742.m_UpperAngle = i743[1]
  return i742
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i744 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i745 = data
  i744.m_MotorSpeed = i745[0]
  i744.m_MaximumMotorTorque = i745[1]
  return i744
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i746 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i747 = data
  i746.m_DampingRatio = i747[0]
  i746.m_Frequency = i747[1]
  i746.m_Angle = i747[2]
  return i746
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i749 = data
  i748.m_LowerTranslation = i749[0]
  i748.m_UpperTranslation = i749[1]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i750 = root || new pc.UnityMaterial()
  var i751 = data
  i750.name = i751[0]
  request.r(i751[1], i751[2], 0, i750, 'shader')
  i750.renderQueue = i751[3]
  i750.enableInstancing = !!i751[4]
  var i753 = i751[5]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i753[i + 0]) );
  }
  i750.floatParameters = i752
  var i755 = i751[6]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i755[i + 0]) );
  }
  i750.colorParameters = i754
  var i757 = i751[7]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i757[i + 0]) );
  }
  i750.vectorParameters = i756
  var i759 = i751[8]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i759[i + 0]) );
  }
  i750.textureParameters = i758
  var i761 = i751[9]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i761[i + 0]) );
  }
  i750.materialFlags = i760
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i765 = data
  i764.name = i765[0]
  i764.value = i765[1]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i769 = data
  i768.name = i769[0]
  i768.value = new pc.Color(i769[1], i769[2], i769[3], i769[4])
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i773 = data
  i772.name = i773[0]
  i772.value = new pc.Vec4( i773[1], i773[2], i773[3], i773[4] )
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i777 = data
  i776.name = i777[0]
  request.r(i777[1], i777[2], 0, i776, 'value')
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i781 = data
  i780.name = i781[0]
  i780.enabled = !!i781[1]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i783 = data
  i782.name = i783[0]
  i782.width = i783[1]
  i782.height = i783[2]
  i782.mipmapCount = i783[3]
  i782.anisoLevel = i783[4]
  i782.filterMode = i783[5]
  i782.hdr = !!i783[6]
  i782.format = i783[7]
  i782.wrapMode = i783[8]
  i782.alphaIsTransparency = !!i783[9]
  i782.alphaSource = i783[10]
  i782.graphicsFormat = i783[11]
  i782.sRGBTexture = !!i783[12]
  i782.desiredColorSpace = i783[13]
  i782.wrapU = i783[14]
  i782.wrapV = i783[15]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i785 = data
  i784.position = new pc.Vec3( i785[0], i785[1], i785[2] )
  i784.scale = new pc.Vec3( i785[3], i785[4], i785[5] )
  i784.rotation = new pc.Quat(i785[6], i785[7], i785[8], i785[9])
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i787 = data
  i786.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i787[0], i786.main)
  i786.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i787[1], i786.colorBySpeed)
  i786.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i787[2], i786.colorOverLifetime)
  i786.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i787[3], i786.emission)
  i786.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i787[4], i786.rotationBySpeed)
  i786.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i787[5], i786.rotationOverLifetime)
  i786.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i787[6], i786.shape)
  i786.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i787[7], i786.sizeBySpeed)
  i786.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i787[8], i786.sizeOverLifetime)
  i786.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i787[9], i786.textureSheetAnimation)
  i786.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i787[10], i786.velocityOverLifetime)
  i786.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i787[11], i786.noise)
  i786.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i787[12], i786.inheritVelocity)
  i786.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i787[13], i786.forceOverLifetime)
  i786.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i787[14], i786.limitVelocityOverLifetime)
  i786.useAutoRandomSeed = !!i787[15]
  i786.randomSeed = i787[16]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i788 = root || new pc.ParticleSystemMain()
  var i789 = data
  i788.duration = i789[0]
  i788.loop = !!i789[1]
  i788.prewarm = !!i789[2]
  i788.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[3], i788.startDelay)
  i788.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[4], i788.startLifetime)
  i788.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[5], i788.startSpeed)
  i788.startSize3D = !!i789[6]
  i788.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[7], i788.startSizeX)
  i788.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[8], i788.startSizeY)
  i788.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[9], i788.startSizeZ)
  i788.startRotation3D = !!i789[10]
  i788.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[11], i788.startRotationX)
  i788.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[12], i788.startRotationY)
  i788.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[13], i788.startRotationZ)
  i788.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i789[14], i788.startColor)
  i788.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[15], i788.gravityModifier)
  i788.simulationSpace = i789[16]
  request.r(i789[17], i789[18], 0, i788, 'customSimulationSpace')
  i788.simulationSpeed = i789[19]
  i788.useUnscaledTime = !!i789[20]
  i788.scalingMode = i789[21]
  i788.playOnAwake = !!i789[22]
  i788.maxParticles = i789[23]
  i788.emitterVelocityMode = i789[24]
  i788.stopAction = i789[25]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i790 = root || new pc.MinMaxCurve()
  var i791 = data
  i790.mode = i791[0]
  i790.curveMin = new pc.AnimationCurve( { keys_flow: i791[1] } )
  i790.curveMax = new pc.AnimationCurve( { keys_flow: i791[2] } )
  i790.curveMultiplier = i791[3]
  i790.constantMin = i791[4]
  i790.constantMax = i791[5]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i792 = root || new pc.MinMaxGradient()
  var i793 = data
  i792.mode = i793[0]
  i792.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i793[1], i792.gradientMin)
  i792.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i793[2], i792.gradientMax)
  i792.colorMin = new pc.Color(i793[3], i793[4], i793[5], i793[6])
  i792.colorMax = new pc.Color(i793[7], i793[8], i793[9], i793[10])
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i795 = data
  i794.mode = i795[0]
  var i797 = i795[1]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i797[i + 0]) );
  }
  i794.colorKeys = i796
  var i799 = i795[2]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i799[i + 0]) );
  }
  i794.alphaKeys = i798
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i800 = root || new pc.ParticleSystemColorBySpeed()
  var i801 = data
  i800.enabled = !!i801[0]
  i800.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i801[1], i800.color)
  i800.range = new pc.Vec2( i801[2], i801[3] )
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i805 = data
  i804.color = new pc.Color(i805[0], i805[1], i805[2], i805[3])
  i804.time = i805[4]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i809 = data
  i808.alpha = i809[0]
  i808.time = i809[1]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i810 = root || new pc.ParticleSystemColorOverLifetime()
  var i811 = data
  i810.enabled = !!i811[0]
  i810.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i811[1], i810.color)
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i812 = root || new pc.ParticleSystemEmitter()
  var i813 = data
  i812.enabled = !!i813[0]
  i812.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[1], i812.rateOverTime)
  i812.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[2], i812.rateOverDistance)
  var i815 = i813[3]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i815[i + 0]) );
  }
  i812.bursts = i814
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i818 = root || new pc.ParticleSystemBurst()
  var i819 = data
  i818.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[0], i818.count)
  i818.cycleCount = i819[1]
  i818.minCount = i819[2]
  i818.maxCount = i819[3]
  i818.repeatInterval = i819[4]
  i818.time = i819[5]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i820 = root || new pc.ParticleSystemRotationBySpeed()
  var i821 = data
  i820.enabled = !!i821[0]
  i820.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[1], i820.x)
  i820.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[2], i820.y)
  i820.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[3], i820.z)
  i820.separateAxes = !!i821[4]
  i820.range = new pc.Vec2( i821[5], i821[6] )
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i822 = root || new pc.ParticleSystemRotationOverLifetime()
  var i823 = data
  i822.enabled = !!i823[0]
  i822.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[1], i822.x)
  i822.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[2], i822.y)
  i822.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[3], i822.z)
  i822.separateAxes = !!i823[4]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i824 = root || new pc.ParticleSystemShape()
  var i825 = data
  i824.enabled = !!i825[0]
  i824.shapeType = i825[1]
  i824.randomDirectionAmount = i825[2]
  i824.sphericalDirectionAmount = i825[3]
  i824.randomPositionAmount = i825[4]
  i824.alignToDirection = !!i825[5]
  i824.radius = i825[6]
  i824.radiusMode = i825[7]
  i824.radiusSpread = i825[8]
  i824.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[9], i824.radiusSpeed)
  i824.radiusThickness = i825[10]
  i824.angle = i825[11]
  i824.length = i825[12]
  i824.boxThickness = new pc.Vec3( i825[13], i825[14], i825[15] )
  i824.meshShapeType = i825[16]
  request.r(i825[17], i825[18], 0, i824, 'mesh')
  request.r(i825[19], i825[20], 0, i824, 'meshRenderer')
  request.r(i825[21], i825[22], 0, i824, 'skinnedMeshRenderer')
  i824.useMeshMaterialIndex = !!i825[23]
  i824.meshMaterialIndex = i825[24]
  i824.useMeshColors = !!i825[25]
  i824.normalOffset = i825[26]
  i824.arc = i825[27]
  i824.arcMode = i825[28]
  i824.arcSpread = i825[29]
  i824.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[30], i824.arcSpeed)
  i824.donutRadius = i825[31]
  i824.position = new pc.Vec3( i825[32], i825[33], i825[34] )
  i824.rotation = new pc.Vec3( i825[35], i825[36], i825[37] )
  i824.scale = new pc.Vec3( i825[38], i825[39], i825[40] )
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i826 = root || new pc.ParticleSystemSizeBySpeed()
  var i827 = data
  i826.enabled = !!i827[0]
  i826.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[1], i826.x)
  i826.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[2], i826.y)
  i826.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[3], i826.z)
  i826.separateAxes = !!i827[4]
  i826.range = new pc.Vec2( i827[5], i827[6] )
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i828 = root || new pc.ParticleSystemSizeOverLifetime()
  var i829 = data
  i828.enabled = !!i829[0]
  i828.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[1], i828.x)
  i828.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[2], i828.y)
  i828.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[3], i828.z)
  i828.separateAxes = !!i829[4]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i830 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i831 = data
  i830.enabled = !!i831[0]
  i830.mode = i831[1]
  i830.animation = i831[2]
  i830.numTilesX = i831[3]
  i830.numTilesY = i831[4]
  i830.useRandomRow = !!i831[5]
  i830.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[6], i830.frameOverTime)
  i830.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[7], i830.startFrame)
  i830.cycleCount = i831[8]
  i830.rowIndex = i831[9]
  i830.flipU = i831[10]
  i830.flipV = i831[11]
  i830.spriteCount = i831[12]
  var i833 = i831[13]
  var i832 = []
  for(var i = 0; i < i833.length; i += 2) {
  request.r(i833[i + 0], i833[i + 1], 2, i832, '')
  }
  i830.sprites = i832
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i836 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i837 = data
  i836.enabled = !!i837[0]
  i836.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[1], i836.x)
  i836.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[2], i836.y)
  i836.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[3], i836.z)
  i836.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[4], i836.radial)
  i836.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[5], i836.speedModifier)
  i836.space = i837[6]
  i836.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[7], i836.orbitalX)
  i836.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[8], i836.orbitalY)
  i836.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[9], i836.orbitalZ)
  i836.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[10], i836.orbitalOffsetX)
  i836.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[11], i836.orbitalOffsetY)
  i836.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[12], i836.orbitalOffsetZ)
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i838 = root || new pc.ParticleSystemNoise()
  var i839 = data
  i838.enabled = !!i839[0]
  i838.separateAxes = !!i839[1]
  i838.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[2], i838.strengthX)
  i838.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[3], i838.strengthY)
  i838.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[4], i838.strengthZ)
  i838.frequency = i839[5]
  i838.damping = !!i839[6]
  i838.octaveCount = i839[7]
  i838.octaveMultiplier = i839[8]
  i838.octaveScale = i839[9]
  i838.quality = i839[10]
  i838.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[11], i838.scrollSpeed)
  i838.scrollSpeedMultiplier = i839[12]
  i838.remapEnabled = !!i839[13]
  i838.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[14], i838.remapX)
  i838.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[15], i838.remapY)
  i838.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[16], i838.remapZ)
  i838.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[17], i838.positionAmount)
  i838.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[18], i838.rotationAmount)
  i838.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[19], i838.sizeAmount)
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i840 = root || new pc.ParticleSystemInheritVelocity()
  var i841 = data
  i840.enabled = !!i841[0]
  i840.mode = i841[1]
  i840.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[2], i840.curve)
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i842 = root || new pc.ParticleSystemForceOverLifetime()
  var i843 = data
  i842.enabled = !!i843[0]
  i842.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[1], i842.x)
  i842.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[2], i842.y)
  i842.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[3], i842.z)
  i842.space = i843[4]
  i842.randomized = !!i843[5]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i844 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i845 = data
  i844.enabled = !!i845[0]
  i844.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[1], i844.limit)
  i844.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[2], i844.limitX)
  i844.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[3], i844.limitY)
  i844.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[4], i844.limitZ)
  i844.dampen = i845[5]
  i844.separateAxes = !!i845[6]
  i844.space = i845[7]
  i844.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[8], i844.drag)
  i844.multiplyDragByParticleSize = !!i845[9]
  i844.multiplyDragByParticleVelocity = !!i845[10]
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i847 = data
  request.r(i847[0], i847[1], 0, i846, 'mesh')
  i846.meshCount = i847[2]
  i846.activeVertexStreamsCount = i847[3]
  i846.alignment = i847[4]
  i846.renderMode = i847[5]
  i846.sortMode = i847[6]
  i846.lengthScale = i847[7]
  i846.velocityScale = i847[8]
  i846.cameraVelocityScale = i847[9]
  i846.normalDirection = i847[10]
  i846.sortingFudge = i847[11]
  i846.minParticleSize = i847[12]
  i846.maxParticleSize = i847[13]
  i846.pivot = new pc.Vec3( i847[14], i847[15], i847[16] )
  request.r(i847[17], i847[18], 0, i846, 'trailMaterial')
  i846.applyActiveColorSpace = !!i847[19]
  i846.enabled = !!i847[20]
  request.r(i847[21], i847[22], 0, i846, 'sharedMaterial')
  var i849 = i847[23]
  var i848 = []
  for(var i = 0; i < i849.length; i += 2) {
  request.r(i849[i + 0], i849[i + 1], 2, i848, '')
  }
  i846.sharedMaterials = i848
  i846.receiveShadows = !!i847[24]
  i846.shadowCastingMode = i847[25]
  i846.sortingLayerID = i847[26]
  i846.sortingOrder = i847[27]
  i846.lightmapIndex = i847[28]
  i846.lightmapSceneIndex = i847[29]
  i846.lightmapScaleOffset = new pc.Vec4( i847[30], i847[31], i847[32], i847[33] )
  i846.lightProbeUsage = i847[34]
  i846.reflectionProbeUsage = i847[35]
  return i846
}

Deserializers["MergeEffect"] = function (request, data, root) {
  var i852 = root || request.c( 'MergeEffect' )
  var i853 = data
  request.r(i853[0], i853[1], 0, i852, 'tf')
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i855 = data
  i854.name = i855[0]
  i854.tagId = i855[1]
  i854.enabled = !!i855[2]
  i854.isStatic = !!i855[3]
  i854.layer = i855[4]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i857 = data
  i856.name = i857[0]
  i856.halfPrecision = !!i857[1]
  i856.useSimplification = !!i857[2]
  i856.useUInt32IndexFormat = !!i857[3]
  i856.vertexCount = i857[4]
  i856.aabb = i857[5]
  var i859 = i857[6]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( !!i859[i + 0] );
  }
  i856.streams = i858
  i856.vertices = i857[7]
  var i861 = i857[8]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i861[i + 0]) );
  }
  i856.subMeshes = i860
  var i863 = i857[9]
  var i862 = []
  for(var i = 0; i < i863.length; i += 16) {
    i862.push( new pc.Mat4().setData(i863[i + 0], i863[i + 1], i863[i + 2], i863[i + 3],  i863[i + 4], i863[i + 5], i863[i + 6], i863[i + 7],  i863[i + 8], i863[i + 9], i863[i + 10], i863[i + 11],  i863[i + 12], i863[i + 13], i863[i + 14], i863[i + 15]) );
  }
  i856.bindposes = i862
  var i865 = i857[10]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i865[i + 0]) );
  }
  i856.blendShapes = i864
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i871 = data
  i870.triangles = i871[0]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i877 = data
  i876.name = i877[0]
  var i879 = i877[1]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i879[i + 0]) );
  }
  i876.frames = i878
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i881 = data
  i880.name = i881[0]
  i880.index = i881[1]
  i880.startup = !!i881[2]
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i883 = data
  i882.pivot = new pc.Vec2( i883[0], i883[1] )
  i882.anchorMin = new pc.Vec2( i883[2], i883[3] )
  i882.anchorMax = new pc.Vec2( i883[4], i883[5] )
  i882.sizeDelta = new pc.Vec2( i883[6], i883[7] )
  i882.anchoredPosition3D = new pc.Vec3( i883[8], i883[9], i883[10] )
  i882.rotation = new pc.Quat(i883[11], i883[12], i883[13], i883[14])
  i882.scale = new pc.Vec3( i883[15], i883[16], i883[17] )
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i885 = data
  i884.planeDistance = i885[0]
  i884.referencePixelsPerUnit = i885[1]
  i884.isFallbackOverlay = !!i885[2]
  i884.renderMode = i885[3]
  i884.renderOrder = i885[4]
  i884.sortingLayerName = i885[5]
  i884.sortingOrder = i885[6]
  i884.scaleFactor = i885[7]
  request.r(i885[8], i885[9], 0, i884, 'worldCamera')
  i884.overrideSorting = !!i885[10]
  i884.pixelPerfect = !!i885[11]
  i884.targetDisplay = i885[12]
  i884.overridePixelPerfect = !!i885[13]
  i884.enabled = !!i885[14]
  return i884
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i886 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i887 = data
  i886.m_UiScaleMode = i887[0]
  i886.m_ReferencePixelsPerUnit = i887[1]
  i886.m_ScaleFactor = i887[2]
  i886.m_ReferenceResolution = new pc.Vec2( i887[3], i887[4] )
  i886.m_ScreenMatchMode = i887[5]
  i886.m_MatchWidthOrHeight = i887[6]
  i886.m_PhysicalUnit = i887[7]
  i886.m_FallbackScreenDPI = i887[8]
  i886.m_DefaultSpriteDPI = i887[9]
  i886.m_DynamicPixelsPerUnit = i887[10]
  i886.m_PresetInfoIsWorld = !!i887[11]
  return i886
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i888 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i889 = data
  i888.m_IgnoreReversedGraphics = !!i889[0]
  i888.m_BlockingObjects = i889[1]
  i888.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i889[2] )
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i891 = data
  request.r(i891[0], i891[1], 0, i890, 'animatorController')
  request.r(i891[2], i891[3], 0, i890, 'avatar')
  i890.updateMode = i891[4]
  i890.hasTransformHierarchy = !!i891[5]
  i890.applyRootMotion = !!i891[6]
  var i893 = i891[7]
  var i892 = []
  for(var i = 0; i < i893.length; i += 2) {
  request.r(i893[i + 0], i893[i + 1], 2, i892, '')
  }
  i890.humanBones = i892
  i890.enabled = !!i891[8]
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i897 = data
  i896.cullTransparentMesh = !!i897[0]
  return i896
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i898 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i899 = data
  i898.m_hasFontAssetChanged = !!i899[0]
  request.r(i899[1], i899[2], 0, i898, 'm_baseMaterial')
  i898.m_maskOffset = new pc.Vec4( i899[3], i899[4], i899[5], i899[6] )
  i898.m_text = i899[7]
  i898.m_isRightToLeft = !!i899[8]
  request.r(i899[9], i899[10], 0, i898, 'm_fontAsset')
  request.r(i899[11], i899[12], 0, i898, 'm_sharedMaterial')
  var i901 = i899[13]
  var i900 = []
  for(var i = 0; i < i901.length; i += 2) {
  request.r(i901[i + 0], i901[i + 1], 2, i900, '')
  }
  i898.m_fontSharedMaterials = i900
  request.r(i899[14], i899[15], 0, i898, 'm_fontMaterial')
  var i903 = i899[16]
  var i902 = []
  for(var i = 0; i < i903.length; i += 2) {
  request.r(i903[i + 0], i903[i + 1], 2, i902, '')
  }
  i898.m_fontMaterials = i902
  i898.m_fontColor32 = UnityEngine.Color32.ConstructColor(i899[17], i899[18], i899[19], i899[20])
  i898.m_fontColor = new pc.Color(i899[21], i899[22], i899[23], i899[24])
  i898.m_enableVertexGradient = !!i899[25]
  i898.m_colorMode = i899[26]
  i898.m_fontColorGradient = request.d('TMPro.VertexGradient', i899[27], i898.m_fontColorGradient)
  request.r(i899[28], i899[29], 0, i898, 'm_fontColorGradientPreset')
  request.r(i899[30], i899[31], 0, i898, 'm_spriteAsset')
  i898.m_tintAllSprites = !!i899[32]
  request.r(i899[33], i899[34], 0, i898, 'm_StyleSheet')
  i898.m_TextStyleHashCode = i899[35]
  i898.m_overrideHtmlColors = !!i899[36]
  i898.m_faceColor = UnityEngine.Color32.ConstructColor(i899[37], i899[38], i899[39], i899[40])
  i898.m_fontSize = i899[41]
  i898.m_fontSizeBase = i899[42]
  i898.m_fontWeight = i899[43]
  i898.m_enableAutoSizing = !!i899[44]
  i898.m_fontSizeMin = i899[45]
  i898.m_fontSizeMax = i899[46]
  i898.m_fontStyle = i899[47]
  i898.m_HorizontalAlignment = i899[48]
  i898.m_VerticalAlignment = i899[49]
  i898.m_textAlignment = i899[50]
  i898.m_characterSpacing = i899[51]
  i898.m_wordSpacing = i899[52]
  i898.m_lineSpacing = i899[53]
  i898.m_lineSpacingMax = i899[54]
  i898.m_paragraphSpacing = i899[55]
  i898.m_charWidthMaxAdj = i899[56]
  i898.m_TextWrappingMode = i899[57]
  i898.m_wordWrappingRatios = i899[58]
  i898.m_overflowMode = i899[59]
  request.r(i899[60], i899[61], 0, i898, 'm_linkedTextComponent')
  request.r(i899[62], i899[63], 0, i898, 'parentLinkedComponent')
  i898.m_enableKerning = !!i899[64]
  var i905 = i899[65]
  var i904 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i905.length; i += 1) {
    i904.add(i905[i + 0]);
  }
  i898.m_ActiveFontFeatures = i904
  i898.m_enableExtraPadding = !!i899[66]
  i898.checkPaddingRequired = !!i899[67]
  i898.m_isRichText = !!i899[68]
  i898.m_parseCtrlCharacters = !!i899[69]
  i898.m_isOrthographic = !!i899[70]
  i898.m_isCullingEnabled = !!i899[71]
  i898.m_horizontalMapping = i899[72]
  i898.m_verticalMapping = i899[73]
  i898.m_uvLineOffset = i899[74]
  i898.m_geometrySortingOrder = i899[75]
  i898.m_IsTextObjectScaleStatic = !!i899[76]
  i898.m_VertexBufferAutoSizeReduction = !!i899[77]
  i898.m_useMaxVisibleDescender = !!i899[78]
  i898.m_pageToDisplay = i899[79]
  i898.m_margin = new pc.Vec4( i899[80], i899[81], i899[82], i899[83] )
  i898.m_isUsingLegacyAnimationComponent = !!i899[84]
  i898.m_isVolumetricText = !!i899[85]
  request.r(i899[86], i899[87], 0, i898, 'm_Material')
  i898.m_EmojiFallbackSupport = !!i899[88]
  i898.m_Maskable = !!i899[89]
  i898.m_Color = new pc.Color(i899[90], i899[91], i899[92], i899[93])
  i898.m_RaycastTarget = !!i899[94]
  i898.m_RaycastPadding = new pc.Vec4( i899[95], i899[96], i899[97], i899[98] )
  return i898
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i906 = root || request.c( 'TMPro.VertexGradient' )
  var i907 = data
  i906.topLeft = new pc.Color(i907[0], i907[1], i907[2], i907[3])
  i906.topRight = new pc.Color(i907[4], i907[5], i907[6], i907[7])
  i906.bottomLeft = new pc.Color(i907[8], i907[9], i907[10], i907[11])
  i906.bottomRight = new pc.Color(i907[12], i907[13], i907[14], i907[15])
  return i906
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i910 = root || request.c( 'UnityEngine.UI.Slider' )
  var i911 = data
  request.r(i911[0], i911[1], 0, i910, 'm_FillRect')
  request.r(i911[2], i911[3], 0, i910, 'm_HandleRect')
  i910.m_Direction = i911[4]
  i910.m_MinValue = i911[5]
  i910.m_MaxValue = i911[6]
  i910.m_WholeNumbers = !!i911[7]
  i910.m_Value = i911[8]
  i910.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i911[9], i910.m_OnValueChanged)
  i910.m_Navigation = request.d('UnityEngine.UI.Navigation', i911[10], i910.m_Navigation)
  i910.m_Transition = i911[11]
  i910.m_Colors = request.d('UnityEngine.UI.ColorBlock', i911[12], i910.m_Colors)
  i910.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i911[13], i910.m_SpriteState)
  i910.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i911[14], i910.m_AnimationTriggers)
  i910.m_Interactable = !!i911[15]
  request.r(i911[16], i911[17], 0, i910, 'm_TargetGraphic')
  return i910
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i912 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i913 = data
  i912.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i913[0], i912.m_PersistentCalls)
  return i912
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i914 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i915 = data
  var i917 = i915[0]
  var i916 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i917.length; i += 1) {
    i916.add(request.d('UnityEngine.Events.PersistentCall', i917[i + 0]));
  }
  i914.m_Calls = i916
  return i914
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i920 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i921 = data
  request.r(i921[0], i921[1], 0, i920, 'm_Target')
  i920.m_TargetAssemblyTypeName = i921[2]
  i920.m_MethodName = i921[3]
  i920.m_Mode = i921[4]
  i920.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i921[5], i920.m_Arguments)
  i920.m_CallState = i921[6]
  return i920
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i922 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i923 = data
  i922.m_Mode = i923[0]
  i922.m_WrapAround = !!i923[1]
  request.r(i923[2], i923[3], 0, i922, 'm_SelectOnUp')
  request.r(i923[4], i923[5], 0, i922, 'm_SelectOnDown')
  request.r(i923[6], i923[7], 0, i922, 'm_SelectOnLeft')
  request.r(i923[8], i923[9], 0, i922, 'm_SelectOnRight')
  return i922
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i924 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i925 = data
  i924.m_NormalColor = new pc.Color(i925[0], i925[1], i925[2], i925[3])
  i924.m_HighlightedColor = new pc.Color(i925[4], i925[5], i925[6], i925[7])
  i924.m_PressedColor = new pc.Color(i925[8], i925[9], i925[10], i925[11])
  i924.m_SelectedColor = new pc.Color(i925[12], i925[13], i925[14], i925[15])
  i924.m_DisabledColor = new pc.Color(i925[16], i925[17], i925[18], i925[19])
  i924.m_ColorMultiplier = i925[20]
  i924.m_FadeDuration = i925[21]
  return i924
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i926 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i927 = data
  request.r(i927[0], i927[1], 0, i926, 'm_HighlightedSprite')
  request.r(i927[2], i927[3], 0, i926, 'm_PressedSprite')
  request.r(i927[4], i927[5], 0, i926, 'm_SelectedSprite')
  request.r(i927[6], i927[7], 0, i926, 'm_DisabledSprite')
  return i926
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i928 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i929 = data
  i928.m_NormalTrigger = i929[0]
  i928.m_HighlightedTrigger = i929[1]
  i928.m_PressedTrigger = i929[2]
  i928.m_SelectedTrigger = i929[3]
  i928.m_DisabledTrigger = i929[4]
  return i928
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i930 = root || request.c( 'UnityEngine.UI.Image' )
  var i931 = data
  request.r(i931[0], i931[1], 0, i930, 'm_Sprite')
  i930.m_Type = i931[2]
  i930.m_PreserveAspect = !!i931[3]
  i930.m_FillCenter = !!i931[4]
  i930.m_FillMethod = i931[5]
  i930.m_FillAmount = i931[6]
  i930.m_FillClockwise = !!i931[7]
  i930.m_FillOrigin = i931[8]
  i930.m_UseSpriteMesh = !!i931[9]
  i930.m_PixelsPerUnitMultiplier = i931[10]
  request.r(i931[11], i931[12], 0, i930, 'm_Material')
  i930.m_Maskable = !!i931[13]
  i930.m_Color = new pc.Color(i931[14], i931[15], i931[16], i931[17])
  i930.m_RaycastTarget = !!i931[18]
  i930.m_RaycastPadding = new pc.Vec4( i931[19], i931[20], i931[21], i931[22] )
  return i930
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i932 = root || request.c( 'UnityEngine.UI.Button' )
  var i933 = data
  i932.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i933[0], i932.m_OnClick)
  i932.m_Navigation = request.d('UnityEngine.UI.Navigation', i933[1], i932.m_Navigation)
  i932.m_Transition = i933[2]
  i932.m_Colors = request.d('UnityEngine.UI.ColorBlock', i933[3], i932.m_Colors)
  i932.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i933[4], i932.m_SpriteState)
  i932.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i933[5], i932.m_AnimationTriggers)
  i932.m_Interactable = !!i933[6]
  request.r(i933[7], i933[8], 0, i932, 'm_TargetGraphic')
  return i932
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i934 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i935 = data
  i934.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i935[0], i934.m_PersistentCalls)
  return i934
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i936 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i937 = data
  request.r(i937[0], i937[1], 0, i936, 'm_ObjectArgument')
  i936.m_ObjectArgumentAssemblyTypeName = i937[2]
  i936.m_IntArgument = i937[3]
  i936.m_FloatArgument = i937[4]
  i936.m_StringArgument = i937[5]
  i936.m_BoolArgument = !!i937[6]
  return i936
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i938 = root || request.c( 'Ply_Pool' )
  var i939 = data
  var i941 = i939[0]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( request.d('Ply_Pool+PoolAmount', i941[i + 0]) );
  }
  i938.poolAmounts = i940
  request.r(i939[1], i939[2], 0, i938, 'poolHolder')
  return i938
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i944 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i945 = data
  i944.type = i945[0]
  i944.amount = i945[1]
  request.r(i945[2], i945[3], 0, i944, 'gameUnit')
  return i944
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i946 = root || request.c( 'Ply_SoundManager' )
  var i947 = data
  var i949 = i947[0]
  var i948 = []
  for(var i = 0; i < i949.length; i += 1) {
    i948.push( request.d('Ply_SoundManager+FxAudio', i949[i + 0]) );
  }
  i946.fxAudios = i948
  var i951 = i947[1]
  var i950 = []
  for(var i = 0; i < i951.length; i += 2) {
  request.r(i951[i + 0], i951[i + 1], 2, i950, '')
  }
  i946.audioClips = i950
  request.r(i947[2], i947[3], 0, i946, 'sound')
  return i946
}

Deserializers["Ply_SoundManager+FxAudio"] = function (request, data, root) {
  var i954 = root || request.c( 'Ply_SoundManager+FxAudio' )
  var i955 = data
  i954.fxType = i955[0]
  request.r(i955[1], i955[2], 0, i954, 'audioClip')
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i959 = data
  request.r(i959[0], i959[1], 0, i958, 'clip')
  request.r(i959[2], i959[3], 0, i958, 'outputAudioMixerGroup')
  i958.playOnAwake = !!i959[4]
  i958.loop = !!i959[5]
  i958.time = i959[6]
  i958.volume = i959[7]
  i958.pitch = i959[8]
  i958.enabled = !!i959[9]
  return i958
}

Deserializers["GameManager"] = function (request, data, root) {
  var i960 = root || request.c( 'GameManager' )
  var i961 = data
  i960.isPlaying = !!i961[0]
  i960.isTutorial = !!i961[1]
  i960.isGotoStore = !!i961[2]
  i960.isDraggingConveyor = !!i961[3]
  i960.countMove = i961[4]
  i960.maxMove = i961[5]
  i960.startLayer = i961[6]
  i960.currentLayer = i961[7]
  request.r(i961[8], i961[9], 0, i960, 'mainBox')
  request.r(i961[10], i961[11], 0, i960, 'itemConveyor')
  request.r(i961[12], i961[13], 0, i960, 'handTutorial')
  i960.tutorialDelay = i961[14]
  return i960
}

Deserializers["UIManager"] = function (request, data, root) {
  var i962 = root || request.c( 'UIManager' )
  var i963 = data
  request.r(i963[0], i963[1], 0, i962, 'winUI')
  request.r(i963[2], i963[3], 0, i962, 'loseUI')
  request.r(i963[4], i963[5], 0, i962, 'tutorial')
  request.r(i963[6], i963[7], 0, i962, 'verticalUI')
  request.r(i963[8], i963[9], 0, i962, 'horizontalUI')
  request.r(i963[10], i963[11], 0, i962, 'downloadBtnVertical')
  request.r(i963[12], i963[13], 0, i962, 'dowloadBtnHorizontal')
  request.r(i963[14], i963[15], 0, i962, 'textAnim')
  i962.isGoogleBuild = !!i963[16]
  request.r(i963[17], i963[18], 0, i962, 'progressSlider')
  request.r(i963[19], i963[20], 0, i962, 'progressText')
  i962.maxProgressItems = i963[21]
  i962.startProgressItems = i963[22]
  i962.screenWidth = i963[23]
  i962.screenHeight = i963[24]
  i962.scaleHeightOnWidth = i963[25]
  i962.isVertical = !!i963[26]
  i962.isScreenVertical = !!i963[27]
  request.r(i963[28], i963[29], 0, i962, 'cam')
  i962.verticalUIHeightOnWidthRatio = i963[30]
  i962.screenVerticalHeightOnWidthRatio = i963[31]
  i962.introZoomOutMultiplier = i963[32]
  i962.cameraZoomDuration = i963[33]
  i962.useContinuousScaling = !!i963[34]
  i962.baseOrthographicSize = i963[35]
  i962.baseAspect = i963[36]
  i962.landscapeSize = i963[37]
  i962.defaultPortraitSize = i963[38]
  var i965 = i963[39]
  var i964 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i965.length; i += 1) {
    i964.add(request.d('ScreenScaleStep', i965[i + 0]));
  }
  i962.discreteScaleSteps = i964
  i962.usePerspectiveCamera = !!i963[40]
  request.r(i963[41], i963[42], 0, i962, 'perspectiveFocus')
  i962.perspectiveFocusDistance = i963[43]
  i962.perspectivePadding = i963[44]
  i962.fitRendererBounds = !!i963[45]
  request.r(i963[46], i963[47], 0, i962, 'boundsRoot')
  var i967 = i963[48]
  var i966 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i967.length; i += 2) {
  request.r(i967[i + 0], i967[i + 1], 1, i966, '')
  }
  i962.boundsRenderers = i966
  return i962
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i970 = root || request.c( 'ScreenScaleStep' )
  var i971 = data
  i970.heightOnWidthRatio = i971[0]
  i970.orthographicSize = i971[1]
  return i970
}

Deserializers["InputManager"] = function (request, data, root) {
  var i974 = root || request.c( 'InputManager' )
  var i975 = data
  i974.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i975[0] )
  i974.targetLayer = UnityEngine.LayerMask.FromIntegerValue( i975[1] )
  i974.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i975[2] )
  i974.boxLayer = UnityEngine.LayerMask.FromIntegerValue( i975[3] )
  i974.conveyorLayer = UnityEngine.LayerMask.FromIntegerValue( i975[4] )
  i974.isDragging = !!i975[5]
  request.r(i975[6], i975[7], 0, i974, 'mainCamera')
  return i974
}

Deserializers["CameraController"] = function (request, data, root) {
  var i976 = root || request.c( 'CameraController' )
  var i977 = data
  request.r(i977[0], i977[1], 0, i976, 'targetCamera')
  i976.enableZoom = !!i977[2]
  i976.minZoomRatio = i977[3]
  i976.maxZoomRatio = i977[4]
  i976.mouseWheelZoomSpeed = i977[5]
  i976.pinchZoomSpeed = i977[6]
  i976.enableDrag = !!i977[7]
  i976.horizontalOnly = !!i977[8]
  i976.dragSensitivity = i977[9]
  i976.maxHorizontalOffset = i977[10]
  i976.maxVerticalOffset = i977[11]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i979 = data
  i978.aspect = i979[0]
  i978.orthographic = !!i979[1]
  i978.orthographicSize = i979[2]
  i978.backgroundColor = new pc.Color(i979[3], i979[4], i979[5], i979[6])
  i978.nearClipPlane = i979[7]
  i978.farClipPlane = i979[8]
  i978.fieldOfView = i979[9]
  i978.depth = i979[10]
  i978.clearFlags = i979[11]
  i978.cullingMask = i979[12]
  i978.rect = i979[13]
  request.r(i979[14], i979[15], 0, i978, 'targetTexture')
  i978.usePhysicalProperties = !!i979[16]
  i978.focalLength = i979[17]
  i978.sensorSize = new pc.Vec2( i979[18], i979[19] )
  i978.lensShift = new pc.Vec2( i979[20], i979[21] )
  i978.gateFit = i979[22]
  i978.commandBufferCount = i979[23]
  i978.cameraType = i979[24]
  i978.enabled = !!i979[25]
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i981 = data
  i980.type = i981[0]
  i980.color = new pc.Color(i981[1], i981[2], i981[3], i981[4])
  i980.cullingMask = i981[5]
  i980.intensity = i981[6]
  i980.range = i981[7]
  i980.spotAngle = i981[8]
  i980.shadows = i981[9]
  i980.shadowNormalBias = i981[10]
  i980.shadowBias = i981[11]
  i980.shadowStrength = i981[12]
  i980.shadowResolution = i981[13]
  i980.lightmapBakeType = i981[14]
  i980.renderMode = i981[15]
  request.r(i981[16], i981[17], 0, i980, 'cookie')
  i980.cookieSize = i981[18]
  i980.shadowNearPlane = i981[19]
  i980.occlusionMaskChannel = i981[20]
  i980.enabled = !!i981[21]
  return i980
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i982 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i983 = data
  request.r(i983[0], i983[1], 0, i982, 'm_FirstSelected')
  i982.m_sendNavigationEvents = !!i983[2]
  i982.m_DragThreshold = i983[3]
  return i982
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i984 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i985 = data
  i984.m_HorizontalAxis = i985[0]
  i984.m_VerticalAxis = i985[1]
  i984.m_SubmitButton = i985[2]
  i984.m_CancelButton = i985[3]
  i984.m_InputActionsPerSecond = i985[4]
  i984.m_RepeatDelay = i985[5]
  i984.m_ForceModuleActive = !!i985[6]
  i984.m_SendPointerHoverToParent = !!i985[7]
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i987 = data
  i986.color = new pc.Color(i987[0], i987[1], i987[2], i987[3])
  request.r(i987[4], i987[5], 0, i986, 'sprite')
  i986.flipX = !!i987[6]
  i986.flipY = !!i987[7]
  i986.drawMode = i987[8]
  i986.size = new pc.Vec2( i987[9], i987[10] )
  i986.tileMode = i987[11]
  i986.adaptiveModeThreshold = i987[12]
  i986.maskInteraction = i987[13]
  i986.spriteSortPoint = i987[14]
  i986.enabled = !!i987[15]
  request.r(i987[16], i987[17], 0, i986, 'sharedMaterial')
  var i989 = i987[18]
  var i988 = []
  for(var i = 0; i < i989.length; i += 2) {
  request.r(i989[i + 0], i989[i + 1], 2, i988, '')
  }
  i986.sharedMaterials = i988
  i986.receiveShadows = !!i987[19]
  i986.shadowCastingMode = i987[20]
  i986.sortingLayerID = i987[21]
  i986.sortingOrder = i987[22]
  i986.lightmapIndex = i987[23]
  i986.lightmapSceneIndex = i987[24]
  i986.lightmapScaleOffset = new pc.Vec4( i987[25], i987[26], i987[27], i987[28] )
  i986.lightProbeUsage = i987[29]
  i986.reflectionProbeUsage = i987[30]
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i991 = data
  i990.center = new pc.Vec3( i991[0], i991[1], i991[2] )
  i990.radius = i991[3]
  i990.enabled = !!i991[4]
  i990.isTrigger = !!i991[5]
  request.r(i991[6], i991[7], 0, i990, 'material')
  return i990
}

Deserializers["Box"] = function (request, data, root) {
  var i992 = root || request.c( 'Box' )
  var i993 = data
  i992.useBox = !!i993[0]
  i992.spawnMode = i993[1]
  var i995 = i993[2]
  var i994 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i995.length; i += 2) {
  request.r(i995[i + 0], i995[i + 1], 1, i994, '')
  }
  i992.dynamicItems = i994
  var i997 = i993[3]
  var i996 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i997.length; i += 2) {
  request.r(i997[i + 0], i997[i + 1], 1, i996, '')
  }
  i992.spawnTargets = i996
  i992.initialSpawnCount = i993[4]
  i992.revealDuration = i993[5]
  i992.showInitialBatchShadowsOnSpawn = !!i993[6]
  request.r(i993[7], i993[8], 0, i992, 'graphicController')
  return i992
}

Deserializers["BoxGraphicController"] = function (request, data, root) {
  var i1002 = root || request.c( 'BoxGraphicController' )
  var i1003 = data
  request.r(i1003[0], i1003[1], 0, i1002, 'skeletonAnimation')
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1005 = data
  request.r(i1005[0], i1005[1], 0, i1004, 'sharedMesh')
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1007 = data
  request.r(i1007[0], i1007[1], 0, i1006, 'additionalVertexStreams')
  i1006.enabled = !!i1007[2]
  request.r(i1007[3], i1007[4], 0, i1006, 'sharedMaterial')
  var i1009 = i1007[5]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 2) {
  request.r(i1009[i + 0], i1009[i + 1], 2, i1008, '')
  }
  i1006.sharedMaterials = i1008
  i1006.receiveShadows = !!i1007[6]
  i1006.shadowCastingMode = i1007[7]
  i1006.sortingLayerID = i1007[8]
  i1006.sortingOrder = i1007[9]
  i1006.lightmapIndex = i1007[10]
  i1006.lightmapSceneIndex = i1007[11]
  i1006.lightmapScaleOffset = new pc.Vec4( i1007[12], i1007[13], i1007[14], i1007[15] )
  i1006.lightProbeUsage = i1007[16]
  i1006.reflectionProbeUsage = i1007[17]
  return i1006
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i1010 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i1011 = data
  i1010.loop = !!i1011[0]
  i1010.timeScale = i1011[1]
  request.r(i1011[2], i1011[3], 0, i1010, 'skeletonDataAsset')
  i1010.initialSkinName = i1011[4]
  i1010.fixPrefabOverrideViaMeshFilter = i1011[5]
  i1010.initialFlipX = !!i1011[6]
  i1010.initialFlipY = !!i1011[7]
  i1010.updateWhenInvisible = i1011[8]
  i1010.zSpacing = i1011[9]
  i1010.useClipping = !!i1011[10]
  i1010.immutableTriangles = !!i1011[11]
  i1010.pmaVertexColors = !!i1011[12]
  i1010.clearStateOnDisable = !!i1011[13]
  i1010.tintBlack = !!i1011[14]
  i1010.singleSubmesh = !!i1011[15]
  i1010.fixDrawOrder = !!i1011[16]
  i1010.addNormals = !!i1011[17]
  i1010.calculateTangents = !!i1011[18]
  i1010.maskInteraction = i1011[19]
  i1010.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i1011[20], i1010.maskMaterials)
  i1010.disableRenderingOnOverride = !!i1011[21]
  i1010._animationName = i1011[22]
  var i1013 = i1011[23]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( i1013[i + 0] );
  }
  i1010.separatorSlotNames = i1012
  return i1010
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i1014 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i1015 = data
  var i1017 = i1015[0]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 2) {
  request.r(i1017[i + 0], i1017[i + 1], 2, i1016, '')
  }
  i1014.materialsMaskDisabled = i1016
  var i1019 = i1015[1]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 2) {
  request.r(i1019[i + 0], i1019[i + 1], 2, i1018, '')
  }
  i1014.materialsInsideMask = i1018
  var i1021 = i1015[2]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 2) {
  request.r(i1021[i + 0], i1021[i + 1], 2, i1020, '')
  }
  i1014.materialsOutsideMask = i1020
  return i1014
}

Deserializers["ItemHolder"] = function (request, data, root) {
  var i1024 = root || request.c( 'ItemHolder' )
  var i1025 = data
  i1024.id = i1025[0]
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1027 = data
  i1026.center = new pc.Vec3( i1027[0], i1027[1], i1027[2] )
  i1026.size = new pc.Vec3( i1027[3], i1027[4], i1027[5] )
  i1026.enabled = !!i1027[6]
  i1026.isTrigger = !!i1027[7]
  request.r(i1027[8], i1027[9], 0, i1026, 'material')
  return i1026
}

Deserializers["ItemSetupTool"] = function (request, data, root) {
  var i1028 = root || request.c( 'ItemSetupTool' )
  var i1029 = data
  request.r(i1029[0], i1029[1], 0, i1028, 'spritesParent')
  request.r(i1029[2], i1029[3], 0, i1028, 'holdersParent')
  i1028.shadowSuffix = i1029[4]
  i1028.holderPrefix = i1029[5]
  i1028.holdersParentName = i1029[6]
  i1028.colliderDepth = i1029[7]
  i1028.colliderSizeMultiplier = i1029[8]
  i1028.generatedShadowColor = new pc.Color(i1029[9], i1029[10], i1029[11], i1029[12])
  i1028.fadedBlackShadowColor = new pc.Color(i1029[13], i1029[14], i1029[15], i1029[16])
  i1028.generatedShadowLocalOffset = new pc.Vec3( i1029[17], i1029[18], i1029[19] )
  i1028.itemLayerName = i1029[20]
  i1028.holderLayerName = i1029[21]
  return i1028
}

Deserializers["Item"] = function (request, data, root) {
  var i1030 = root || request.c( 'Item' )
  var i1031 = data
  i1030.fxTypeOnPlace = i1031[0]
  i1030.id = i1031[1]
  i1030.currentState = i1031[2]
  i1030.itemHolderLayer = UnityEngine.LayerMask.FromIntegerValue( i1031[3] )
  request.r(i1031[4], i1031[5], 0, i1030, 'auraEffect')
  i1030.returnToSlotOnMiss = !!i1031[6]
  i1030.hideShadowOnDrop = !!i1031[7]
  i1030.scaleOnSpawn = !!i1031[8]
  i1030.spawnScaleMultiplier = i1031[9]
  request.r(i1031[10], i1031[11], 0, i1030, 'correctHolderTransform')
  request.r(i1031[12], i1031[13], 0, i1030, 'shadowOnHolder')
  i1030.canShowShadowHint = !!i1031[14]
  request.r(i1031[15], i1031[16], 0, i1030, 'homeSlot')
  i1030.waitingPosition = new pc.Vec3( i1031[17], i1031[18], i1031[19] )
  request.r(i1031[20], i1031[21], 0, i1030, 'spriteRenderer')
  return i1030
}

Deserializers["ScreenHeightPositionAnchor"] = function (request, data, root) {
  var i1032 = root || request.c( 'ScreenHeightPositionAnchor' )
  var i1033 = data
  request.r(i1033[0], i1033[1], 0, i1032, 'anchorPoint')
  request.r(i1033[2], i1033[3], 0, i1032, 'targetCamera')
  i1032.viewportYRatio = i1033[4]
  i1032.alignOnStart = !!i1033[5]
  i1032.alignOnEnable = !!i1033[6]
  i1032.realignOnScreenSizeChanged = !!i1033[7]
  i1032.drawGizmos = !!i1033[8]
  i1032.targetLineColor = new pc.Color(i1033[9], i1033[10], i1033[11], i1033[12])
  i1032.anchorColor = new pc.Color(i1033[13], i1033[14], i1033[15], i1033[16])
  return i1032
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i1034 = root || request.c( 'TMPro.TextMeshPro' )
  var i1035 = data
  i1034._SortingLayer = i1035[0]
  i1034._SortingLayerID = i1035[1]
  i1034._SortingOrder = i1035[2]
  i1034.m_hasFontAssetChanged = !!i1035[3]
  request.r(i1035[4], i1035[5], 0, i1034, 'm_renderer')
  i1034.m_maskType = i1035[6]
  i1034.m_text = i1035[7]
  i1034.m_isRightToLeft = !!i1035[8]
  request.r(i1035[9], i1035[10], 0, i1034, 'm_fontAsset')
  request.r(i1035[11], i1035[12], 0, i1034, 'm_sharedMaterial')
  var i1037 = i1035[13]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 2) {
  request.r(i1037[i + 0], i1037[i + 1], 2, i1036, '')
  }
  i1034.m_fontSharedMaterials = i1036
  request.r(i1035[14], i1035[15], 0, i1034, 'm_fontMaterial')
  var i1039 = i1035[16]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 2) {
  request.r(i1039[i + 0], i1039[i + 1], 2, i1038, '')
  }
  i1034.m_fontMaterials = i1038
  i1034.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1035[17], i1035[18], i1035[19], i1035[20])
  i1034.m_fontColor = new pc.Color(i1035[21], i1035[22], i1035[23], i1035[24])
  i1034.m_enableVertexGradient = !!i1035[25]
  i1034.m_colorMode = i1035[26]
  i1034.m_fontColorGradient = request.d('TMPro.VertexGradient', i1035[27], i1034.m_fontColorGradient)
  request.r(i1035[28], i1035[29], 0, i1034, 'm_fontColorGradientPreset')
  request.r(i1035[30], i1035[31], 0, i1034, 'm_spriteAsset')
  i1034.m_tintAllSprites = !!i1035[32]
  request.r(i1035[33], i1035[34], 0, i1034, 'm_StyleSheet')
  i1034.m_TextStyleHashCode = i1035[35]
  i1034.m_overrideHtmlColors = !!i1035[36]
  i1034.m_faceColor = UnityEngine.Color32.ConstructColor(i1035[37], i1035[38], i1035[39], i1035[40])
  i1034.m_fontSize = i1035[41]
  i1034.m_fontSizeBase = i1035[42]
  i1034.m_fontWeight = i1035[43]
  i1034.m_enableAutoSizing = !!i1035[44]
  i1034.m_fontSizeMin = i1035[45]
  i1034.m_fontSizeMax = i1035[46]
  i1034.m_fontStyle = i1035[47]
  i1034.m_HorizontalAlignment = i1035[48]
  i1034.m_VerticalAlignment = i1035[49]
  i1034.m_textAlignment = i1035[50]
  i1034.m_characterSpacing = i1035[51]
  i1034.m_wordSpacing = i1035[52]
  i1034.m_lineSpacing = i1035[53]
  i1034.m_lineSpacingMax = i1035[54]
  i1034.m_paragraphSpacing = i1035[55]
  i1034.m_charWidthMaxAdj = i1035[56]
  i1034.m_TextWrappingMode = i1035[57]
  i1034.m_wordWrappingRatios = i1035[58]
  i1034.m_overflowMode = i1035[59]
  request.r(i1035[60], i1035[61], 0, i1034, 'm_linkedTextComponent')
  request.r(i1035[62], i1035[63], 0, i1034, 'parentLinkedComponent')
  i1034.m_enableKerning = !!i1035[64]
  var i1041 = i1035[65]
  var i1040 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.add(i1041[i + 0]);
  }
  i1034.m_ActiveFontFeatures = i1040
  i1034.m_enableExtraPadding = !!i1035[66]
  i1034.checkPaddingRequired = !!i1035[67]
  i1034.m_isRichText = !!i1035[68]
  i1034.m_parseCtrlCharacters = !!i1035[69]
  i1034.m_isOrthographic = !!i1035[70]
  i1034.m_isCullingEnabled = !!i1035[71]
  i1034.m_horizontalMapping = i1035[72]
  i1034.m_verticalMapping = i1035[73]
  i1034.m_uvLineOffset = i1035[74]
  i1034.m_geometrySortingOrder = i1035[75]
  i1034.m_IsTextObjectScaleStatic = !!i1035[76]
  i1034.m_VertexBufferAutoSizeReduction = !!i1035[77]
  i1034.m_useMaxVisibleDescender = !!i1035[78]
  i1034.m_pageToDisplay = i1035[79]
  i1034.m_margin = new pc.Vec4( i1035[80], i1035[81], i1035[82], i1035[83] )
  i1034.m_isUsingLegacyAnimationComponent = !!i1035[84]
  i1034.m_isVolumetricText = !!i1035[85]
  request.r(i1035[86], i1035[87], 0, i1034, 'm_Material')
  i1034.m_EmojiFallbackSupport = !!i1035[88]
  i1034.m_Maskable = !!i1035[89]
  i1034.m_Color = new pc.Color(i1035[90], i1035[91], i1035[92], i1035[93])
  i1034.m_RaycastTarget = !!i1035[94]
  i1034.m_RaycastPadding = new pc.Vec4( i1035[95], i1035[96], i1035[97], i1035[98] )
  return i1034
}

Deserializers["ItemConveyor"] = function (request, data, root) {
  var i1042 = root || request.c( 'ItemConveyor' )
  var i1043 = data
  i1042.isDraggingConveyor = !!i1043[0]
  request.r(i1043[1], i1043[2], 0, i1042, 'movingRoot')
  var i1045 = i1043[3]
  var i1044 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1045.length; i += 2) {
  request.r(i1045[i + 0], i1045[i + 1], 1, i1044, '')
  }
  i1042.itemSlots = i1044
  i1042.arrangeSlotsOnStart = !!i1043[4]
  i1042.leftLocalPoint = new pc.Vec3( i1043[5], i1043[6], i1043[7] )
  i1042.rightLocalPoint = new pc.Vec3( i1043[8], i1043[9], i1043[10] )
  i1042.sortSlotsLeftToRight = !!i1043[11]
  i1042.alignLeftMostSlotToScreenLeftOnStart = !!i1043[12]
  i1042.enableHorizontalDrag = !!i1043[13]
  i1042.conveyorLayer = UnityEngine.LayerMask.FromIntegerValue( i1043[14] )
  request.r(i1043[15], i1043[16], 0, i1042, 'raycastCamera')
  i1042.raycastDistance = i1043[17]
  i1042.leftEdgeViewportPadding = i1043[18]
  i1042.rightEdgeViewportPadding = i1043[19]
  i1042.slideBackSpeed = i1043[20]
  request.r(i1043[21], i1043[22], 0, i1042, 'sliderBackground')
  request.r(i1043[23], i1043[24], 0, i1042, 'sliderHandle')
  request.r(i1043[25], i1043[26], 0, i1042, 'sliderHandleRenderer')
  i1042.hideSliderInLandscape = !!i1043[27]
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1047 = data
  i1046.ambientIntensity = i1047[0]
  i1046.reflectionIntensity = i1047[1]
  i1046.ambientMode = i1047[2]
  i1046.ambientLight = new pc.Color(i1047[3], i1047[4], i1047[5], i1047[6])
  i1046.ambientSkyColor = new pc.Color(i1047[7], i1047[8], i1047[9], i1047[10])
  i1046.ambientGroundColor = new pc.Color(i1047[11], i1047[12], i1047[13], i1047[14])
  i1046.ambientEquatorColor = new pc.Color(i1047[15], i1047[16], i1047[17], i1047[18])
  i1046.fogColor = new pc.Color(i1047[19], i1047[20], i1047[21], i1047[22])
  i1046.fogEndDistance = i1047[23]
  i1046.fogStartDistance = i1047[24]
  i1046.fogDensity = i1047[25]
  i1046.fog = !!i1047[26]
  request.r(i1047[27], i1047[28], 0, i1046, 'skybox')
  i1046.fogMode = i1047[29]
  var i1049 = i1047[30]
  var i1048 = []
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1049[i + 0]) );
  }
  i1046.lightmaps = i1048
  i1046.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1047[31], i1046.lightProbes)
  i1046.lightmapsMode = i1047[32]
  i1046.mixedBakeMode = i1047[33]
  i1046.environmentLightingMode = i1047[34]
  i1046.ambientProbe = new pc.SphericalHarmonicsL2(i1047[35])
  i1046.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1047[36])
  i1046.useReferenceAmbientProbe = !!i1047[37]
  request.r(i1047[38], i1047[39], 0, i1046, 'customReflection')
  request.r(i1047[40], i1047[41], 0, i1046, 'defaultReflection')
  i1046.defaultReflectionMode = i1047[42]
  i1046.defaultReflectionResolution = i1047[43]
  i1046.sunLightObjectId = i1047[44]
  i1046.pixelLightCount = i1047[45]
  i1046.defaultReflectionHDR = !!i1047[46]
  i1046.hasLightDataAsset = !!i1047[47]
  i1046.hasManualGenerate = !!i1047[48]
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1053 = data
  request.r(i1053[0], i1053[1], 0, i1052, 'lightmapColor')
  request.r(i1053[2], i1053[3], 0, i1052, 'lightmapDirection')
  request.r(i1053[4], i1053[5], 0, i1052, 'shadowMask')
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1054 = root || new UnityEngine.LightProbes()
  var i1055 = data
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1063 = data
  var i1065 = i1063[0]
  var i1064 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1065[i + 0]));
  }
  i1062.ShaderCompilationErrors = i1064
  i1062.name = i1063[1]
  i1062.guid = i1063[2]
  var i1067 = i1063[3]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.push( i1067[i + 0] );
  }
  i1062.shaderDefinedKeywords = i1066
  var i1069 = i1063[4]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1069[i + 0]) );
  }
  i1062.passes = i1068
  var i1071 = i1063[5]
  var i1070 = []
  for(var i = 0; i < i1071.length; i += 1) {
    i1070.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1071[i + 0]) );
  }
  i1062.usePasses = i1070
  var i1073 = i1063[6]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1073[i + 0]) );
  }
  i1062.defaultParameterValues = i1072
  request.r(i1063[7], i1063[8], 0, i1062, 'unityFallbackShader')
  i1062.readDepth = !!i1063[9]
  i1062.hasDepthOnlyPass = !!i1063[10]
  i1062.isCreatedByShaderGraph = !!i1063[11]
  i1062.disableBatching = !!i1063[12]
  i1062.compiled = !!i1063[13]
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1077 = data
  i1076.shaderName = i1077[0]
  i1076.errorMessage = i1077[1]
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1080 = root || new pc.UnityShaderPass()
  var i1081 = data
  i1080.id = i1081[0]
  i1080.subShaderIndex = i1081[1]
  i1080.name = i1081[2]
  i1080.passType = i1081[3]
  i1080.grabPassTextureName = i1081[4]
  i1080.usePass = !!i1081[5]
  i1080.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1081[6], i1080.zTest)
  i1080.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1081[7], i1080.zWrite)
  i1080.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1081[8], i1080.culling)
  i1080.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1081[9], i1080.blending)
  i1080.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1081[10], i1080.alphaBlending)
  i1080.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1081[11], i1080.colorWriteMask)
  i1080.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1081[12], i1080.offsetUnits)
  i1080.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1081[13], i1080.offsetFactor)
  i1080.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1081[14], i1080.stencilRef)
  i1080.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1081[15], i1080.stencilReadMask)
  i1080.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1081[16], i1080.stencilWriteMask)
  i1080.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1081[17], i1080.stencilOp)
  i1080.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1081[18], i1080.stencilOpFront)
  i1080.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1081[19], i1080.stencilOpBack)
  var i1083 = i1081[20]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1083[i + 0]) );
  }
  i1080.tags = i1082
  var i1085 = i1081[21]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( i1085[i + 0] );
  }
  i1080.passDefinedKeywords = i1084
  var i1087 = i1081[22]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1087[i + 0]) );
  }
  i1080.passDefinedKeywordGroups = i1086
  var i1089 = i1081[23]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1089[i + 0]) );
  }
  i1080.variants = i1088
  var i1091 = i1081[24]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1091[i + 0]) );
  }
  i1080.excludedVariants = i1090
  i1080.hasDepthReader = !!i1081[25]
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1093 = data
  i1092.val = i1093[0]
  i1092.name = i1093[1]
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1095 = data
  i1094.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1095[0], i1094.src)
  i1094.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1095[1], i1094.dst)
  i1094.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1095[2], i1094.op)
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1097 = data
  i1096.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1097[0], i1096.pass)
  i1096.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1097[1], i1096.fail)
  i1096.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1097[2], i1096.zFail)
  i1096.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1097[3], i1096.comp)
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1101 = data
  i1100.name = i1101[0]
  i1100.value = i1101[1]
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1105 = data
  var i1107 = i1105[0]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.push( i1107[i + 0] );
  }
  i1104.keywords = i1106
  i1104.hasDiscard = !!i1105[1]
  return i1104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1111 = data
  i1110.passId = i1111[0]
  i1110.subShaderIndex = i1111[1]
  var i1113 = i1111[2]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.push( i1113[i + 0] );
  }
  i1110.keywords = i1112
  i1110.vertexProgram = i1111[3]
  i1110.fragmentProgram = i1111[4]
  i1110.exportedForWebGl2 = !!i1111[5]
  i1110.readDepth = !!i1111[6]
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1117 = data
  request.r(i1117[0], i1117[1], 0, i1116, 'shader')
  i1116.pass = i1117[2]
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1121 = data
  i1120.name = i1121[0]
  i1120.type = i1121[1]
  i1120.value = new pc.Vec4( i1121[2], i1121[3], i1121[4], i1121[5] )
  i1120.textureValue = i1121[6]
  i1120.shaderPropertyFlag = i1121[7]
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1123 = data
  i1122.name = i1123[0]
  request.r(i1123[1], i1123[2], 0, i1122, 'texture')
  i1122.aabb = i1123[3]
  i1122.vertices = i1123[4]
  i1122.triangles = i1123[5]
  i1122.textureRect = UnityEngine.Rect.MinMaxRect(i1123[6], i1123[7], i1123[8], i1123[9])
  i1122.packedRect = UnityEngine.Rect.MinMaxRect(i1123[10], i1123[11], i1123[12], i1123[13])
  i1122.border = new pc.Vec4( i1123[14], i1123[15], i1123[16], i1123[17] )
  i1122.transparency = i1123[18]
  i1122.bounds = i1123[19]
  i1122.pixelsPerUnit = i1123[20]
  i1122.textureWidth = i1123[21]
  i1122.textureHeight = i1123[22]
  i1122.nativeSize = new pc.Vec2( i1123[23], i1123[24] )
  i1122.pivot = new pc.Vec2( i1123[25], i1123[26] )
  i1122.textureRectOffset = new pc.Vec2( i1123[27], i1123[28] )
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1125 = data
  i1124.name = i1125[0]
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1127 = data
  i1126.name = i1127[0]
  i1126.wrapMode = i1127[1]
  i1126.isLooping = !!i1127[2]
  i1126.length = i1127[3]
  var i1129 = i1127[4]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1129[i + 0]) );
  }
  i1126.curves = i1128
  var i1131 = i1127[5]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1131[i + 0]) );
  }
  i1126.events = i1130
  i1126.halfPrecision = !!i1127[6]
  i1126._frameRate = i1127[7]
  i1126.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1127[8], i1126.localBounds)
  i1126.hasMuscleCurves = !!i1127[9]
  var i1133 = i1127[10]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.push( i1133[i + 0] );
  }
  i1126.clipMuscleConstant = i1132
  i1126.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1127[11], i1126.clipBindingConstant)
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1137 = data
  i1136.path = i1137[0]
  i1136.hash = i1137[1]
  i1136.componentType = i1137[2]
  i1136.property = i1137[3]
  i1136.keys = i1137[4]
  var i1139 = i1137[5]
  var i1138 = []
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1139[i + 0]) );
  }
  i1136.objectReferenceKeys = i1138
  return i1136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1143 = data
  i1142.time = i1143[0]
  request.r(i1143[1], i1143[2], 0, i1142, 'value')
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1147 = data
  i1146.functionName = i1147[0]
  i1146.floatParameter = i1147[1]
  i1146.intParameter = i1147[2]
  i1146.stringParameter = i1147[3]
  request.r(i1147[4], i1147[5], 0, i1146, 'objectReferenceParameter')
  i1146.time = i1147[6]
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1149 = data
  i1148.center = new pc.Vec3( i1149[0], i1149[1], i1149[2] )
  i1148.extends = new pc.Vec3( i1149[3], i1149[4], i1149[5] )
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1153 = data
  var i1155 = i1153[0]
  var i1154 = []
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.push( i1155[i + 0] );
  }
  i1152.genericBindings = i1154
  var i1157 = i1153[1]
  var i1156 = []
  for(var i = 0; i < i1157.length; i += 1) {
    i1156.push( i1157[i + 0] );
  }
  i1152.pptrCurveMapping = i1156
  return i1152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1159 = data
  i1158.name = i1159[0]
  var i1161 = i1159[1]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1161[i + 0]) );
  }
  i1158.layers = i1160
  var i1163 = i1159[2]
  var i1162 = []
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1163[i + 0]) );
  }
  i1158.parameters = i1162
  i1158.animationClips = i1159[3]
  i1158.avatarUnsupported = i1159[4]
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1167 = data
  i1166.name = i1167[0]
  i1166.defaultWeight = i1167[1]
  i1166.blendingMode = i1167[2]
  i1166.avatarMask = i1167[3]
  i1166.syncedLayerIndex = i1167[4]
  i1166.syncedLayerAffectsTiming = !!i1167[5]
  i1166.syncedLayers = i1167[6]
  i1166.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1167[7], i1166.stateMachine)
  return i1166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1169 = data
  i1168.id = i1169[0]
  i1168.name = i1169[1]
  i1168.path = i1169[2]
  var i1171 = i1169[3]
  var i1170 = []
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1171[i + 0]) );
  }
  i1168.states = i1170
  var i1173 = i1169[4]
  var i1172 = []
  for(var i = 0; i < i1173.length; i += 1) {
    i1172.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1173[i + 0]) );
  }
  i1168.machines = i1172
  var i1175 = i1169[5]
  var i1174 = []
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1175[i + 0]) );
  }
  i1168.entryStateTransitions = i1174
  var i1177 = i1169[6]
  var i1176 = []
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1177[i + 0]) );
  }
  i1168.exitStateTransitions = i1176
  var i1179 = i1169[7]
  var i1178 = []
  for(var i = 0; i < i1179.length; i += 1) {
    i1178.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1179[i + 0]) );
  }
  i1168.anyStateTransitions = i1178
  i1168.defaultStateId = i1169[8]
  return i1168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1183 = data
  i1182.id = i1183[0]
  i1182.name = i1183[1]
  i1182.cycleOffset = i1183[2]
  i1182.cycleOffsetParameter = i1183[3]
  i1182.cycleOffsetParameterActive = !!i1183[4]
  i1182.mirror = !!i1183[5]
  i1182.mirrorParameter = i1183[6]
  i1182.mirrorParameterActive = !!i1183[7]
  i1182.motionId = i1183[8]
  i1182.nameHash = i1183[9]
  i1182.fullPathHash = i1183[10]
  i1182.speed = i1183[11]
  i1182.speedParameter = i1183[12]
  i1182.speedParameterActive = !!i1183[13]
  i1182.tag = i1183[14]
  i1182.tagHash = i1183[15]
  i1182.writeDefaultValues = !!i1183[16]
  var i1185 = i1183[17]
  var i1184 = []
  for(var i = 0; i < i1185.length; i += 2) {
  request.r(i1185[i + 0], i1185[i + 1], 2, i1184, '')
  }
  i1182.behaviours = i1184
  var i1187 = i1183[18]
  var i1186 = []
  for(var i = 0; i < i1187.length; i += 1) {
    i1186.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1187[i + 0]) );
  }
  i1182.transitions = i1186
  return i1182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1193 = data
  i1192.fullPath = i1193[0]
  i1192.canTransitionToSelf = !!i1193[1]
  i1192.duration = i1193[2]
  i1192.exitTime = i1193[3]
  i1192.hasExitTime = !!i1193[4]
  i1192.hasFixedDuration = !!i1193[5]
  i1192.interruptionSource = i1193[6]
  i1192.offset = i1193[7]
  i1192.orderedInterruption = !!i1193[8]
  i1192.destinationStateId = i1193[9]
  i1192.isExit = !!i1193[10]
  i1192.mute = !!i1193[11]
  i1192.solo = !!i1193[12]
  var i1195 = i1193[13]
  var i1194 = []
  for(var i = 0; i < i1195.length; i += 1) {
    i1194.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1195[i + 0]) );
  }
  i1192.conditions = i1194
  return i1192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1201 = data
  i1200.destinationStateId = i1201[0]
  i1200.isExit = !!i1201[1]
  i1200.mute = !!i1201[2]
  i1200.solo = !!i1201[3]
  var i1203 = i1201[4]
  var i1202 = []
  for(var i = 0; i < i1203.length; i += 1) {
    i1202.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1203[i + 0]) );
  }
  i1200.conditions = i1202
  return i1200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1207 = data
  i1206.defaultBool = !!i1207[0]
  i1206.defaultFloat = i1207[1]
  i1206.defaultInt = i1207[2]
  i1206.name = i1207[3]
  i1206.nameHash = i1207[4]
  i1206.type = i1207[5]
  return i1206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1209 = data
  i1208.name = i1209[0]
  i1208.bytes64 = i1209[1]
  i1208.data = i1209[2]
  return i1208
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1210 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1211 = data
  i1210.normalStyle = i1211[0]
  i1210.normalSpacingOffset = i1211[1]
  i1210.boldStyle = i1211[2]
  i1210.boldSpacing = i1211[3]
  i1210.italicStyle = i1211[4]
  i1210.tabSize = i1211[5]
  request.r(i1211[6], i1211[7], 0, i1210, 'atlas')
  i1210.m_SourceFontFileGUID = i1211[8]
  i1210.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1211[9], i1210.m_CreationSettings)
  request.r(i1211[10], i1211[11], 0, i1210, 'm_SourceFontFile')
  i1210.m_SourceFontFilePath = i1211[12]
  i1210.m_AtlasPopulationMode = i1211[13]
  i1210.InternalDynamicOS = !!i1211[14]
  var i1213 = i1211[15]
  var i1212 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1213.length; i += 1) {
    i1212.add(request.d('UnityEngine.TextCore.Glyph', i1213[i + 0]));
  }
  i1210.m_GlyphTable = i1212
  var i1215 = i1211[16]
  var i1214 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1215.length; i += 1) {
    i1214.add(request.d('TMPro.TMP_Character', i1215[i + 0]));
  }
  i1210.m_CharacterTable = i1214
  var i1217 = i1211[17]
  var i1216 = []
  for(var i = 0; i < i1217.length; i += 2) {
  request.r(i1217[i + 0], i1217[i + 1], 2, i1216, '')
  }
  i1210.m_AtlasTextures = i1216
  i1210.m_AtlasTextureIndex = i1211[18]
  i1210.m_IsMultiAtlasTexturesEnabled = !!i1211[19]
  i1210.m_GetFontFeatures = !!i1211[20]
  i1210.m_ClearDynamicDataOnBuild = !!i1211[21]
  i1210.m_AtlasWidth = i1211[22]
  i1210.m_AtlasHeight = i1211[23]
  i1210.m_AtlasPadding = i1211[24]
  i1210.m_AtlasRenderMode = i1211[25]
  var i1219 = i1211[26]
  var i1218 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1219.length; i += 1) {
    i1218.add(request.d('UnityEngine.TextCore.GlyphRect', i1219[i + 0]));
  }
  i1210.m_UsedGlyphRects = i1218
  var i1221 = i1211[27]
  var i1220 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1221.length; i += 1) {
    i1220.add(request.d('UnityEngine.TextCore.GlyphRect', i1221[i + 0]));
  }
  i1210.m_FreeGlyphRects = i1220
  i1210.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1211[28], i1210.m_FontFeatureTable)
  i1210.m_ShouldReimportFontFeatures = !!i1211[29]
  var i1223 = i1211[30]
  var i1222 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1223.length; i += 2) {
  request.r(i1223[i + 0], i1223[i + 1], 1, i1222, '')
  }
  i1210.m_FallbackFontAssetTable = i1222
  var i1225 = i1211[31]
  var i1224 = []
  for(var i = 0; i < i1225.length; i += 1) {
    i1224.push( request.d('TMPro.TMP_FontWeightPair', i1225[i + 0]) );
  }
  i1210.m_FontWeightTable = i1224
  var i1227 = i1211[32]
  var i1226 = []
  for(var i = 0; i < i1227.length; i += 1) {
    i1226.push( request.d('TMPro.TMP_FontWeightPair', i1227[i + 0]) );
  }
  i1210.fontWeights = i1226
  i1210.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1211[33], i1210.m_fontInfo)
  var i1229 = i1211[34]
  var i1228 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1229.length; i += 1) {
    i1228.add(request.d('TMPro.TMP_Glyph', i1229[i + 0]));
  }
  i1210.m_glyphInfoList = i1228
  i1210.m_KerningTable = request.d('TMPro.KerningTable', i1211[35], i1210.m_KerningTable)
  var i1231 = i1211[36]
  var i1230 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1231.length; i += 2) {
  request.r(i1231[i + 0], i1231[i + 1], 1, i1230, '')
  }
  i1210.fallbackFontAssets = i1230
  i1210.m_Version = i1211[37]
  i1210.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1211[38], i1210.m_FaceInfo)
  request.r(i1211[39], i1211[40], 0, i1210, 'm_Material')
  return i1210
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1232 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1233 = data
  i1232.sourceFontFileName = i1233[0]
  i1232.sourceFontFileGUID = i1233[1]
  i1232.faceIndex = i1233[2]
  i1232.pointSizeSamplingMode = i1233[3]
  i1232.pointSize = i1233[4]
  i1232.padding = i1233[5]
  i1232.paddingMode = i1233[6]
  i1232.packingMode = i1233[7]
  i1232.atlasWidth = i1233[8]
  i1232.atlasHeight = i1233[9]
  i1232.characterSetSelectionMode = i1233[10]
  i1232.characterSequence = i1233[11]
  i1232.referencedFontAssetGUID = i1233[12]
  i1232.referencedTextAssetGUID = i1233[13]
  i1232.fontStyle = i1233[14]
  i1232.fontStyleModifier = i1233[15]
  i1232.renderMode = i1233[16]
  i1232.includeFontFeatures = !!i1233[17]
  return i1232
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1236 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1237 = data
  i1236.m_Index = i1237[0]
  i1236.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1237[1], i1236.m_Metrics)
  i1236.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1237[2], i1236.m_GlyphRect)
  i1236.m_Scale = i1237[3]
  i1236.m_AtlasIndex = i1237[4]
  i1236.m_ClassDefinitionType = i1237[5]
  return i1236
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1238 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1239 = data
  i1238.m_Width = i1239[0]
  i1238.m_Height = i1239[1]
  i1238.m_HorizontalBearingX = i1239[2]
  i1238.m_HorizontalBearingY = i1239[3]
  i1238.m_HorizontalAdvance = i1239[4]
  return i1238
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1240 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1241 = data
  i1240.m_X = i1241[0]
  i1240.m_Y = i1241[1]
  i1240.m_Width = i1241[2]
  i1240.m_Height = i1241[3]
  return i1240
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1244 = root || request.c( 'TMPro.TMP_Character' )
  var i1245 = data
  i1244.m_ElementType = i1245[0]
  i1244.m_Unicode = i1245[1]
  i1244.m_GlyphIndex = i1245[2]
  i1244.m_Scale = i1245[3]
  return i1244
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1250 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1251 = data
  var i1253 = i1251[0]
  var i1252 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1253.length; i += 1) {
    i1252.add(request.d('TMPro.MultipleSubstitutionRecord', i1253[i + 0]));
  }
  i1250.m_MultipleSubstitutionRecords = i1252
  var i1255 = i1251[1]
  var i1254 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1255.length; i += 1) {
    i1254.add(request.d('TMPro.LigatureSubstitutionRecord', i1255[i + 0]));
  }
  i1250.m_LigatureSubstitutionRecords = i1254
  var i1257 = i1251[2]
  var i1256 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1257.length; i += 1) {
    i1256.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1257[i + 0]));
  }
  i1250.m_GlyphPairAdjustmentRecords = i1256
  var i1259 = i1251[3]
  var i1258 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1259.length; i += 1) {
    i1258.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1259[i + 0]));
  }
  i1250.m_MarkToBaseAdjustmentRecords = i1258
  var i1261 = i1251[4]
  var i1260 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1261.length; i += 1) {
    i1260.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1261[i + 0]));
  }
  i1250.m_MarkToMarkAdjustmentRecords = i1260
  return i1250
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1264 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1265 = data
  i1264.m_TargetGlyphID = i1265[0]
  i1264.m_SubstituteGlyphIDs = i1265[1]
  return i1264
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1268 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1269 = data
  i1268.m_ComponentGlyphIDs = i1269[0]
  i1268.m_LigatureGlyphID = i1269[1]
  return i1268
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1272 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1273 = data
  i1272.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1273[0], i1272.m_FirstAdjustmentRecord)
  i1272.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1273[1], i1272.m_SecondAdjustmentRecord)
  i1272.m_FeatureLookupFlags = i1273[2]
  return i1272
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1276 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1277 = data
  i1276.m_BaseGlyphID = i1277[0]
  i1276.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1277[1], i1276.m_BaseGlyphAnchorPoint)
  i1276.m_MarkGlyphID = i1277[2]
  i1276.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1277[3], i1276.m_MarkPositionAdjustment)
  return i1276
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1280 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1281 = data
  i1280.m_BaseMarkGlyphID = i1281[0]
  i1280.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1281[1], i1280.m_BaseMarkGlyphAnchorPoint)
  i1280.m_CombiningMarkGlyphID = i1281[2]
  i1280.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1281[3], i1280.m_CombiningMarkPositionAdjustment)
  return i1280
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1286 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1287 = data
  request.r(i1287[0], i1287[1], 0, i1286, 'regularTypeface')
  request.r(i1287[2], i1287[3], 0, i1286, 'italicTypeface')
  return i1286
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1288 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1289 = data
  i1288.Name = i1289[0]
  i1288.PointSize = i1289[1]
  i1288.Scale = i1289[2]
  i1288.CharacterCount = i1289[3]
  i1288.LineHeight = i1289[4]
  i1288.Baseline = i1289[5]
  i1288.Ascender = i1289[6]
  i1288.CapHeight = i1289[7]
  i1288.Descender = i1289[8]
  i1288.CenterLine = i1289[9]
  i1288.SuperscriptOffset = i1289[10]
  i1288.SubscriptOffset = i1289[11]
  i1288.SubSize = i1289[12]
  i1288.Underline = i1289[13]
  i1288.UnderlineThickness = i1289[14]
  i1288.strikethrough = i1289[15]
  i1288.strikethroughThickness = i1289[16]
  i1288.TabWidth = i1289[17]
  i1288.Padding = i1289[18]
  i1288.AtlasWidth = i1289[19]
  i1288.AtlasHeight = i1289[20]
  return i1288
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1292 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1293 = data
  i1292.id = i1293[0]
  i1292.x = i1293[1]
  i1292.y = i1293[2]
  i1292.width = i1293[3]
  i1292.height = i1293[4]
  i1292.xOffset = i1293[5]
  i1292.yOffset = i1293[6]
  i1292.xAdvance = i1293[7]
  i1292.scale = i1293[8]
  return i1292
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1294 = root || request.c( 'TMPro.KerningTable' )
  var i1295 = data
  var i1297 = i1295[0]
  var i1296 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1297.length; i += 1) {
    i1296.add(request.d('TMPro.KerningPair', i1297[i + 0]));
  }
  i1294.kerningPairs = i1296
  return i1294
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1300 = root || request.c( 'TMPro.KerningPair' )
  var i1301 = data
  i1300.xOffset = i1301[0]
  i1300.m_FirstGlyph = i1301[1]
  i1300.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1301[2], i1300.m_FirstGlyphAdjustments)
  i1300.m_SecondGlyph = i1301[3]
  i1300.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1301[4], i1300.m_SecondGlyphAdjustments)
  i1300.m_IgnoreSpacingAdjustments = !!i1301[5]
  return i1300
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1302 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1303 = data
  i1302.m_FaceIndex = i1303[0]
  i1302.m_FamilyName = i1303[1]
  i1302.m_StyleName = i1303[2]
  i1302.m_PointSize = i1303[3]
  i1302.m_Scale = i1303[4]
  i1302.m_UnitsPerEM = i1303[5]
  i1302.m_LineHeight = i1303[6]
  i1302.m_AscentLine = i1303[7]
  i1302.m_CapLine = i1303[8]
  i1302.m_MeanLine = i1303[9]
  i1302.m_Baseline = i1303[10]
  i1302.m_DescentLine = i1303[11]
  i1302.m_SuperscriptOffset = i1303[12]
  i1302.m_SuperscriptSize = i1303[13]
  i1302.m_SubscriptOffset = i1303[14]
  i1302.m_SubscriptSize = i1303[15]
  i1302.m_UnderlineOffset = i1303[16]
  i1302.m_UnderlineThickness = i1303[17]
  i1302.m_StrikethroughOffset = i1303[18]
  i1302.m_StrikethroughThickness = i1303[19]
  i1302.m_TabWidth = i1303[20]
  return i1302
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1304 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1305 = data
  var i1307 = i1305[0]
  var i1306 = []
  for(var i = 0; i < i1307.length; i += 2) {
  request.r(i1307[i + 0], i1307[i + 1], 2, i1306, '')
  }
  i1304.atlasAssets = i1306
  i1304.scale = i1305[1]
  request.r(i1305[2], i1305[3], 0, i1304, 'skeletonJSON')
  i1304.isUpgradingBlendModeMaterials = !!i1305[4]
  i1304.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1305[5], i1304.blendModeMaterials)
  var i1309 = i1305[6]
  var i1308 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1309.length; i += 2) {
  request.r(i1309[i + 0], i1309[i + 1], 1, i1308, '')
  }
  i1304.skeletonDataModifiers = i1308
  var i1311 = i1305[7]
  var i1310 = []
  for(var i = 0; i < i1311.length; i += 1) {
    i1310.push( i1311[i + 0] );
  }
  i1304.fromAnimation = i1310
  var i1313 = i1305[8]
  var i1312 = []
  for(var i = 0; i < i1313.length; i += 1) {
    i1312.push( i1313[i + 0] );
  }
  i1304.toAnimation = i1312
  i1304.duration = i1305[9]
  i1304.defaultMix = i1305[10]
  request.r(i1305[11], i1305[12], 0, i1304, 'controller')
  return i1304
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1316 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1317 = data
  i1316.applyAdditiveMaterial = !!i1317[0]
  var i1319 = i1317[1]
  var i1318 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1319.length; i += 1) {
    i1318.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1319[i + 0]));
  }
  i1316.additiveMaterials = i1318
  var i1321 = i1317[2]
  var i1320 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1321.length; i += 1) {
    i1320.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1321[i + 0]));
  }
  i1316.multiplyMaterials = i1320
  var i1323 = i1317[3]
  var i1322 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1323.length; i += 1) {
    i1322.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1323[i + 0]));
  }
  i1316.screenMaterials = i1322
  i1316.requiresBlendModeMaterials = !!i1317[4]
  return i1316
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1326 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1327 = data
  i1326.pageName = i1327[0]
  request.r(i1327[1], i1327[2], 0, i1326, 'material')
  return i1326
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1330 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1331 = data
  request.r(i1331[0], i1331[1], 0, i1330, 'atlasFile')
  var i1333 = i1331[2]
  var i1332 = []
  for(var i = 0; i < i1333.length; i += 2) {
  request.r(i1333[i + 0], i1333[i + 1], 2, i1332, '')
  }
  i1330.materials = i1332
  return i1330
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1334 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1335 = data
  i1334.useSafeMode = !!i1335[0]
  i1334.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1335[1], i1334.safeModeOptions)
  i1334.timeScale = i1335[2]
  i1334.unscaledTimeScale = i1335[3]
  i1334.useSmoothDeltaTime = !!i1335[4]
  i1334.maxSmoothUnscaledTime = i1335[5]
  i1334.rewindCallbackMode = i1335[6]
  i1334.showUnityEditorReport = !!i1335[7]
  i1334.logBehaviour = i1335[8]
  i1334.drawGizmos = !!i1335[9]
  i1334.defaultRecyclable = !!i1335[10]
  i1334.defaultAutoPlay = i1335[11]
  i1334.defaultUpdateType = i1335[12]
  i1334.defaultTimeScaleIndependent = !!i1335[13]
  i1334.defaultEaseType = i1335[14]
  i1334.defaultEaseOvershootOrAmplitude = i1335[15]
  i1334.defaultEasePeriod = i1335[16]
  i1334.defaultAutoKill = !!i1335[17]
  i1334.defaultLoopType = i1335[18]
  i1334.debugMode = !!i1335[19]
  i1334.debugStoreTargetId = !!i1335[20]
  i1334.showPreviewPanel = !!i1335[21]
  i1334.storeSettingsLocation = i1335[22]
  i1334.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1335[23], i1334.modules)
  i1334.createASMDEF = !!i1335[24]
  i1334.showPlayingTweens = !!i1335[25]
  i1334.showPausedTweens = !!i1335[26]
  return i1334
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1336 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1337 = data
  i1336.logBehaviour = i1337[0]
  i1336.nestedTweenFailureBehaviour = i1337[1]
  return i1336
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1338 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1339 = data
  i1338.showPanel = !!i1339[0]
  i1338.audioEnabled = !!i1339[1]
  i1338.physicsEnabled = !!i1339[2]
  i1338.physics2DEnabled = !!i1339[3]
  i1338.spriteEnabled = !!i1339[4]
  i1338.uiEnabled = !!i1339[5]
  i1338.uiToolkitEnabled = !!i1339[6]
  i1338.textMeshProEnabled = !!i1339[7]
  i1338.tk2DEnabled = !!i1339[8]
  i1338.deAudioEnabled = !!i1339[9]
  i1338.deUnityExtendedEnabled = !!i1339[10]
  i1338.epoOutlineEnabled = !!i1339[11]
  return i1338
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1340 = root || request.c( 'TMPro.TMP_Settings' )
  var i1341 = data
  i1340.assetVersion = i1341[0]
  i1340.m_TextWrappingMode = i1341[1]
  i1340.m_enableKerning = !!i1341[2]
  var i1343 = i1341[3]
  var i1342 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1343.length; i += 1) {
    i1342.add(i1343[i + 0]);
  }
  i1340.m_ActiveFontFeatures = i1342
  i1340.m_enableExtraPadding = !!i1341[4]
  i1340.m_enableTintAllSprites = !!i1341[5]
  i1340.m_enableParseEscapeCharacters = !!i1341[6]
  i1340.m_EnableRaycastTarget = !!i1341[7]
  i1340.m_GetFontFeaturesAtRuntime = !!i1341[8]
  i1340.m_missingGlyphCharacter = i1341[9]
  i1340.m_ClearDynamicDataOnBuild = !!i1341[10]
  i1340.m_warningsDisabled = !!i1341[11]
  request.r(i1341[12], i1341[13], 0, i1340, 'm_defaultFontAsset')
  i1340.m_defaultFontAssetPath = i1341[14]
  i1340.m_defaultFontSize = i1341[15]
  i1340.m_defaultAutoSizeMinRatio = i1341[16]
  i1340.m_defaultAutoSizeMaxRatio = i1341[17]
  i1340.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1341[18], i1341[19] )
  i1340.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1341[20], i1341[21] )
  i1340.m_autoSizeTextContainer = !!i1341[22]
  i1340.m_IsTextObjectScaleStatic = !!i1341[23]
  var i1345 = i1341[24]
  var i1344 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1345.length; i += 2) {
  request.r(i1345[i + 0], i1345[i + 1], 1, i1344, '')
  }
  i1340.m_fallbackFontAssets = i1344
  i1340.m_matchMaterialPreset = !!i1341[25]
  i1340.m_HideSubTextObjects = !!i1341[26]
  request.r(i1341[27], i1341[28], 0, i1340, 'm_defaultSpriteAsset')
  i1340.m_defaultSpriteAssetPath = i1341[29]
  i1340.m_enableEmojiSupport = !!i1341[30]
  i1340.m_MissingCharacterSpriteUnicode = i1341[31]
  var i1347 = i1341[32]
  var i1346 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1347.length; i += 2) {
  request.r(i1347[i + 0], i1347[i + 1], 1, i1346, '')
  }
  i1340.m_EmojiFallbackTextAssets = i1346
  i1340.m_defaultColorGradientPresetsPath = i1341[33]
  request.r(i1341[34], i1341[35], 0, i1340, 'm_defaultStyleSheet')
  i1340.m_StyleSheetsResourcePath = i1341[36]
  request.r(i1341[37], i1341[38], 0, i1340, 'm_leadingCharacters')
  request.r(i1341[39], i1341[40], 0, i1340, 'm_followingCharacters')
  i1340.m_UseModernHangulLineBreakingRules = !!i1341[41]
  return i1340
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1350 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1351 = data
  request.r(i1351[0], i1351[1], 0, i1350, 'spriteSheet')
  var i1353 = i1351[2]
  var i1352 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1353.length; i += 1) {
    i1352.add(request.d('TMPro.TMP_Sprite', i1353[i + 0]));
  }
  i1350.spriteInfoList = i1352
  var i1355 = i1351[3]
  var i1354 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1355.length; i += 2) {
  request.r(i1355[i + 0], i1355[i + 1], 1, i1354, '')
  }
  i1350.fallbackSpriteAssets = i1354
  var i1357 = i1351[4]
  var i1356 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1357.length; i += 1) {
    i1356.add(request.d('TMPro.TMP_SpriteCharacter', i1357[i + 0]));
  }
  i1350.m_SpriteCharacterTable = i1356
  var i1359 = i1351[5]
  var i1358 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1359.length; i += 1) {
    i1358.add(request.d('TMPro.TMP_SpriteGlyph', i1359[i + 0]));
  }
  i1350.m_GlyphTable = i1358
  i1350.m_Version = i1351[6]
  i1350.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1351[7], i1350.m_FaceInfo)
  request.r(i1351[8], i1351[9], 0, i1350, 'm_Material')
  return i1350
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1362 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1363 = data
  i1362.name = i1363[0]
  i1362.hashCode = i1363[1]
  i1362.unicode = i1363[2]
  i1362.pivot = new pc.Vec2( i1363[3], i1363[4] )
  request.r(i1363[5], i1363[6], 0, i1362, 'sprite')
  i1362.id = i1363[7]
  i1362.x = i1363[8]
  i1362.y = i1363[9]
  i1362.width = i1363[10]
  i1362.height = i1363[11]
  i1362.xOffset = i1363[12]
  i1362.yOffset = i1363[13]
  i1362.xAdvance = i1363[14]
  i1362.scale = i1363[15]
  return i1362
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1368 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1369 = data
  i1368.m_Name = i1369[0]
  i1368.m_ElementType = i1369[1]
  i1368.m_Unicode = i1369[2]
  i1368.m_GlyphIndex = i1369[3]
  i1368.m_Scale = i1369[4]
  return i1368
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1372 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1373 = data
  request.r(i1373[0], i1373[1], 0, i1372, 'sprite')
  i1372.m_Index = i1373[2]
  i1372.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1373[3], i1372.m_Metrics)
  i1372.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1373[4], i1372.m_GlyphRect)
  i1372.m_Scale = i1373[5]
  i1372.m_AtlasIndex = i1373[6]
  i1372.m_ClassDefinitionType = i1373[7]
  return i1372
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1374 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1375 = data
  var i1377 = i1375[0]
  var i1376 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1377.length; i += 1) {
    i1376.add(request.d('TMPro.TMP_Style', i1377[i + 0]));
  }
  i1374.m_StyleList = i1376
  return i1374
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1380 = root || request.c( 'TMPro.TMP_Style' )
  var i1381 = data
  i1380.m_Name = i1381[0]
  i1380.m_HashCode = i1381[1]
  i1380.m_OpeningDefinition = i1381[2]
  i1380.m_ClosingDefinition = i1381[3]
  i1380.m_OpeningTagArray = i1381[4]
  i1380.m_ClosingTagArray = i1381[5]
  return i1380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1383 = data
  var i1385 = i1383[0]
  var i1384 = []
  for(var i = 0; i < i1385.length; i += 1) {
    i1384.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1385[i + 0]) );
  }
  i1382.files = i1384
  i1382.componentToPrefabIds = i1383[1]
  return i1382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1389 = data
  i1388.path = i1389[0]
  request.r(i1389[1], i1389[2], 0, i1388, 'unityObject')
  return i1388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1391 = data
  var i1393 = i1391[0]
  var i1392 = []
  for(var i = 0; i < i1393.length; i += 1) {
    i1392.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1393[i + 0]) );
  }
  i1390.scriptsExecutionOrder = i1392
  var i1395 = i1391[1]
  var i1394 = []
  for(var i = 0; i < i1395.length; i += 1) {
    i1394.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1395[i + 0]) );
  }
  i1390.sortingLayers = i1394
  var i1397 = i1391[2]
  var i1396 = []
  for(var i = 0; i < i1397.length; i += 1) {
    i1396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1397[i + 0]) );
  }
  i1390.cullingLayers = i1396
  i1390.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1391[3], i1390.timeSettings)
  i1390.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1391[4], i1390.physicsSettings)
  i1390.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1391[5], i1390.physics2DSettings)
  i1390.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1391[6], i1390.qualitySettings)
  i1390.enableRealtimeShadows = !!i1391[7]
  i1390.enableAutoInstancing = !!i1391[8]
  i1390.enableStaticBatching = !!i1391[9]
  i1390.enableDynamicBatching = !!i1391[10]
  i1390.lightmapEncodingQuality = i1391[11]
  i1390.desiredColorSpace = i1391[12]
  var i1399 = i1391[13]
  var i1398 = []
  for(var i = 0; i < i1399.length; i += 1) {
    i1398.push( i1399[i + 0] );
  }
  i1390.allTags = i1398
  return i1390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1403 = data
  i1402.name = i1403[0]
  i1402.value = i1403[1]
  return i1402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1407 = data
  i1406.id = i1407[0]
  i1406.name = i1407[1]
  i1406.value = i1407[2]
  return i1406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1411 = data
  i1410.id = i1411[0]
  i1410.name = i1411[1]
  return i1410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1413 = data
  i1412.fixedDeltaTime = i1413[0]
  i1412.maximumDeltaTime = i1413[1]
  i1412.timeScale = i1413[2]
  i1412.maximumParticleTimestep = i1413[3]
  return i1412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1415 = data
  i1414.gravity = new pc.Vec3( i1415[0], i1415[1], i1415[2] )
  i1414.defaultSolverIterations = i1415[3]
  i1414.bounceThreshold = i1415[4]
  i1414.autoSyncTransforms = !!i1415[5]
  i1414.autoSimulation = !!i1415[6]
  var i1417 = i1415[7]
  var i1416 = []
  for(var i = 0; i < i1417.length; i += 1) {
    i1416.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1417[i + 0]) );
  }
  i1414.collisionMatrix = i1416
  return i1414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1421 = data
  i1420.enabled = !!i1421[0]
  i1420.layerId = i1421[1]
  i1420.otherLayerId = i1421[2]
  return i1420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1423 = data
  request.r(i1423[0], i1423[1], 0, i1422, 'material')
  i1422.gravity = new pc.Vec2( i1423[2], i1423[3] )
  i1422.positionIterations = i1423[4]
  i1422.velocityIterations = i1423[5]
  i1422.velocityThreshold = i1423[6]
  i1422.maxLinearCorrection = i1423[7]
  i1422.maxAngularCorrection = i1423[8]
  i1422.maxTranslationSpeed = i1423[9]
  i1422.maxRotationSpeed = i1423[10]
  i1422.baumgarteScale = i1423[11]
  i1422.baumgarteTOIScale = i1423[12]
  i1422.timeToSleep = i1423[13]
  i1422.linearSleepTolerance = i1423[14]
  i1422.angularSleepTolerance = i1423[15]
  i1422.defaultContactOffset = i1423[16]
  i1422.autoSimulation = !!i1423[17]
  i1422.queriesHitTriggers = !!i1423[18]
  i1422.queriesStartInColliders = !!i1423[19]
  i1422.callbacksOnDisable = !!i1423[20]
  i1422.reuseCollisionCallbacks = !!i1423[21]
  i1422.autoSyncTransforms = !!i1423[22]
  var i1425 = i1423[23]
  var i1424 = []
  for(var i = 0; i < i1425.length; i += 1) {
    i1424.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1425[i + 0]) );
  }
  i1422.collisionMatrix = i1424
  return i1422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1429 = data
  i1428.enabled = !!i1429[0]
  i1428.layerId = i1429[1]
  i1428.otherLayerId = i1429[2]
  return i1428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1431 = data
  var i1433 = i1431[0]
  var i1432 = []
  for(var i = 0; i < i1433.length; i += 1) {
    i1432.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1433[i + 0]) );
  }
  i1430.qualityLevels = i1432
  var i1435 = i1431[1]
  var i1434 = []
  for(var i = 0; i < i1435.length; i += 1) {
    i1434.push( i1435[i + 0] );
  }
  i1430.names = i1434
  i1430.shadows = i1431[2]
  i1430.anisotropicFiltering = i1431[3]
  i1430.antiAliasing = i1431[4]
  i1430.lodBias = i1431[5]
  i1430.shadowCascades = i1431[6]
  i1430.shadowDistance = i1431[7]
  i1430.shadowmaskMode = i1431[8]
  i1430.shadowProjection = i1431[9]
  i1430.shadowResolution = i1431[10]
  i1430.softParticles = !!i1431[11]
  i1430.softVegetation = !!i1431[12]
  i1430.activeColorSpace = i1431[13]
  i1430.desiredColorSpace = i1431[14]
  i1430.masterTextureLimit = i1431[15]
  i1430.maxQueuedFrames = i1431[16]
  i1430.particleRaycastBudget = i1431[17]
  i1430.pixelLightCount = i1431[18]
  i1430.realtimeReflectionProbes = !!i1431[19]
  i1430.shadowCascade2Split = i1431[20]
  i1430.shadowCascade4Split = new pc.Vec3( i1431[21], i1431[22], i1431[23] )
  i1430.streamingMipmapsActive = !!i1431[24]
  i1430.vSyncCount = i1431[25]
  i1430.asyncUploadBufferSize = i1431[26]
  i1430.asyncUploadTimeSlice = i1431[27]
  i1430.billboardsFaceCameraPosition = !!i1431[28]
  i1430.shadowNearPlaneOffset = i1431[29]
  i1430.streamingMipmapsMemoryBudget = i1431[30]
  i1430.maximumLODLevel = i1431[31]
  i1430.streamingMipmapsAddAllCameras = !!i1431[32]
  i1430.streamingMipmapsMaxLevelReduction = i1431[33]
  i1430.streamingMipmapsRenderersPerFrame = i1431[34]
  i1430.resolutionScalingFixedDPIFactor = i1431[35]
  i1430.streamingMipmapsMaxFileIORequests = i1431[36]
  i1430.currentQualityLevel = i1431[37]
  return i1430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1441 = data
  i1440.weight = i1441[0]
  i1440.vertices = i1441[1]
  i1440.normals = i1441[2]
  i1440.tangents = i1441[3]
  return i1440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1445 = data
  i1444.mode = i1445[0]
  i1444.parameter = i1445[1]
  i1444.threshold = i1445[2]
  return i1444
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1446 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1447 = data
  i1446.m_GlyphIndex = i1447[0]
  i1446.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1447[1], i1446.m_GlyphValueRecord)
  return i1446
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1448 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1449 = data
  i1448.m_XCoordinate = i1449[0]
  i1448.m_YCoordinate = i1449[1]
  return i1448
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1450 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1451 = data
  i1450.m_XPositionAdjustment = i1451[0]
  i1450.m_YPositionAdjustment = i1451[1]
  return i1450
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1452 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1453 = data
  i1452.xPlacement = i1453[0]
  i1452.yPlacement = i1453[1]
  i1452.xAdvance = i1453[2]
  i1452.yAdvance = i1453[3]
  return i1452
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1454 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1455 = data
  i1454.m_XPlacement = i1455[0]
  i1454.m_YPlacement = i1455[1]
  i1454.m_XAdvance = i1455[2]
  i1454.m_YAdvance = i1455[3]
  return i1454
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"enabled":21},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[67],"68":[33],"69":[70],"71":[70],"72":[70],"73":[70],"74":[70],"75":[70],"76":[77],"78":[77],"79":[77],"80":[77],"81":[77],"82":[77],"83":[77],"84":[77],"85":[77],"86":[77],"87":[77],"88":[77],"89":[77],"90":[33],"91":[46],"92":[93],"94":[93],"10":[9],"95":[96],"97":[98],"99":[46,45],"100":[98],"101":[100],"102":[98],"103":[98],"104":[105],"106":[105],"107":[98],"108":[9],"109":[16,9],"44":[46],"110":[16,9],"111":[14,46],"98":[46],"112":[46,45],"113":[70],"114":[77],"115":[116],"117":[105],"118":[40],"119":[33],"120":[121],"122":[38],"123":[10],"124":[9],"52":[46,9],"17":[9,16],"125":[9],"126":[16,9],"127":[46],"128":[16,9],"129":[9],"130":[131],"132":[131],"133":[131],"134":[9],"135":[9],"13":[10],"20":[16,9],"136":[9],"12":[10],"137":[9],"138":[9],"139":[9],"140":[9],"141":[9],"142":[9],"143":[9],"144":[9],"145":[9],"146":[16,9],"147":[9],"148":[9],"149":[9],"19":[9],"150":[16,9],"151":[9],"152":[38],"153":[38],"39":[38],"154":[38],"155":[33],"156":[33]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","MergeEffect","UnityEngine.Mesh","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.CanvasRenderer","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Slider","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Button","GameManager","Ply_Pool","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEditor.Audio.AudioMixerGroupController","Box","ItemConveyor","UnityEngine.GameObject","UIManager","UnityEngine.Camera","InputManager","CameraController","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.SpriteRenderer","UnityEngine.SphereCollider","Item","BoxGraphicController","Spine.Unity.SkeletonAnimation","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","Spine.Unity.SkeletonDataAsset","ItemHolder","UnityEngine.BoxCollider","ItemSetupTool","ScreenHeightPositionAnchor","TMPro.TextMeshPro","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.Examples.BasicPlatformerController","UnityEngine.CharacterController","Spine.Unity.Examples.SkeletonGhost","Spine.Unity.SkeletonRenderer","Spine.Unity.Examples.RenderExistingMesh","Spine.Unity.Examples.SkeletonRenderTexture","Spine.Unity.Examples.SkeletonRenderTextureFadeout","Spine.Unity.Examples.SkeletonRagdoll","Spine.Unity.Examples.SkeletonRagdoll2D","Spine.Unity.Examples.SkeletonUtilityEyeConstraint","Spine.Unity.SkeletonUtilityBone","Spine.Unity.Examples.SkeletonUtilityGroundConstraint","Spine.Unity.Examples.SpineGauge","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "DreamyRoom";

Deserializers.lunaInitializationTime = "06/01/2026 09:19:15";

Deserializers.lunaDaysRunning = "27.9";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "PLY_DreamyRoom_Lv689_GG";

Deserializers.lunaAppID = "27599";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1853";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5182";

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

Deserializers.buildID = "20eb7f6a-5c1d-42b1-9981-3f4bd2de14ac";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

