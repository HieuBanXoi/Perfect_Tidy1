var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.JointSpring' )
  var i733 = data
  i732.spring = i733[0]
  i732.damper = i733[1]
  i732.targetPosition = i733[2]
  return i732
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.JointMotor' )
  var i735 = data
  i734.m_TargetVelocity = i735[0]
  i734.m_Force = i735[1]
  i734.m_FreeSpin = i735[2]
  return i734
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i736 = root || request.c( 'UnityEngine.JointLimits' )
  var i737 = data
  i736.m_Min = i737[0]
  i736.m_Max = i737[1]
  i736.m_Bounciness = i737[2]
  i736.m_BounceMinVelocity = i737[3]
  i736.m_ContactDistance = i737[4]
  i736.minBounce = i737[5]
  i736.maxBounce = i737[6]
  return i736
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.JointDrive' )
  var i739 = data
  i738.m_PositionSpring = i739[0]
  i738.m_PositionDamper = i739[1]
  i738.m_MaximumForce = i739[2]
  i738.m_UseAcceleration = i739[3]
  return i738
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i741 = data
  i740.m_Spring = i741[0]
  i740.m_Damper = i741[1]
  return i740
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i743 = data
  i742.m_Limit = i743[0]
  i742.m_Bounciness = i743[1]
  i742.m_ContactDistance = i743[2]
  return i742
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i744 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i745 = data
  i744.m_ExtremumSlip = i745[0]
  i744.m_ExtremumValue = i745[1]
  i744.m_AsymptoteSlip = i745[2]
  i744.m_AsymptoteValue = i745[3]
  i744.m_Stiffness = i745[4]
  return i744
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i746 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i747 = data
  i746.m_LowerAngle = i747[0]
  i746.m_UpperAngle = i747[1]
  return i746
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i749 = data
  i748.m_MotorSpeed = i749[0]
  i748.m_MaximumMotorTorque = i749[1]
  return i748
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i750 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i751 = data
  i750.m_DampingRatio = i751[0]
  i750.m_Frequency = i751[1]
  i750.m_Angle = i751[2]
  return i750
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i752 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i753 = data
  i752.m_LowerTranslation = i753[0]
  i752.m_UpperTranslation = i753[1]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i754 = root || new pc.UnityMaterial()
  var i755 = data
  i754.name = i755[0]
  request.r(i755[1], i755[2], 0, i754, 'shader')
  i754.renderQueue = i755[3]
  i754.enableInstancing = !!i755[4]
  var i757 = i755[5]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i757[i + 0]) );
  }
  i754.floatParameters = i756
  var i759 = i755[6]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i759[i + 0]) );
  }
  i754.colorParameters = i758
  var i761 = i755[7]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i761[i + 0]) );
  }
  i754.vectorParameters = i760
  var i763 = i755[8]
  var i762 = []
  for(var i = 0; i < i763.length; i += 1) {
    i762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i763[i + 0]) );
  }
  i754.textureParameters = i762
  var i765 = i755[9]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i765[i + 0]) );
  }
  i754.materialFlags = i764
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i769 = data
  i768.name = i769[0]
  i768.value = i769[1]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i773 = data
  i772.name = i773[0]
  i772.value = new pc.Color(i773[1], i773[2], i773[3], i773[4])
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i777 = data
  i776.name = i777[0]
  i776.value = new pc.Vec4( i777[1], i777[2], i777[3], i777[4] )
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i781 = data
  i780.name = i781[0]
  request.r(i781[1], i781[2], 0, i780, 'value')
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i785 = data
  i784.name = i785[0]
  i784.enabled = !!i785[1]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i787 = data
  i786.name = i787[0]
  i786.width = i787[1]
  i786.height = i787[2]
  i786.mipmapCount = i787[3]
  i786.anisoLevel = i787[4]
  i786.filterMode = i787[5]
  i786.hdr = !!i787[6]
  i786.format = i787[7]
  i786.wrapMode = i787[8]
  i786.alphaIsTransparency = !!i787[9]
  i786.alphaSource = i787[10]
  i786.graphicsFormat = i787[11]
  i786.sRGBTexture = !!i787[12]
  i786.desiredColorSpace = i787[13]
  i786.wrapU = i787[14]
  i786.wrapV = i787[15]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i789 = data
  i788.position = new pc.Vec3( i789[0], i789[1], i789[2] )
  i788.scale = new pc.Vec3( i789[3], i789[4], i789[5] )
  i788.rotation = new pc.Quat(i789[6], i789[7], i789[8], i789[9])
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i791 = data
  i790.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i791[0], i790.main)
  i790.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i791[1], i790.colorBySpeed)
  i790.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i791[2], i790.colorOverLifetime)
  i790.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i791[3], i790.emission)
  i790.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i791[4], i790.rotationBySpeed)
  i790.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i791[5], i790.rotationOverLifetime)
  i790.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i791[6], i790.shape)
  i790.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i791[7], i790.sizeBySpeed)
  i790.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i791[8], i790.sizeOverLifetime)
  i790.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i791[9], i790.textureSheetAnimation)
  i790.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i791[10], i790.velocityOverLifetime)
  i790.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i791[11], i790.noise)
  i790.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i791[12], i790.inheritVelocity)
  i790.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i791[13], i790.forceOverLifetime)
  i790.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i791[14], i790.limitVelocityOverLifetime)
  i790.useAutoRandomSeed = !!i791[15]
  i790.randomSeed = i791[16]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i792 = root || new pc.ParticleSystemMain()
  var i793 = data
  i792.duration = i793[0]
  i792.loop = !!i793[1]
  i792.prewarm = !!i793[2]
  i792.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[3], i792.startDelay)
  i792.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[4], i792.startLifetime)
  i792.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[5], i792.startSpeed)
  i792.startSize3D = !!i793[6]
  i792.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[7], i792.startSizeX)
  i792.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[8], i792.startSizeY)
  i792.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[9], i792.startSizeZ)
  i792.startRotation3D = !!i793[10]
  i792.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[11], i792.startRotationX)
  i792.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[12], i792.startRotationY)
  i792.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[13], i792.startRotationZ)
  i792.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i793[14], i792.startColor)
  i792.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[15], i792.gravityModifier)
  i792.simulationSpace = i793[16]
  request.r(i793[17], i793[18], 0, i792, 'customSimulationSpace')
  i792.simulationSpeed = i793[19]
  i792.useUnscaledTime = !!i793[20]
  i792.scalingMode = i793[21]
  i792.playOnAwake = !!i793[22]
  i792.maxParticles = i793[23]
  i792.emitterVelocityMode = i793[24]
  i792.stopAction = i793[25]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i794 = root || new pc.MinMaxCurve()
  var i795 = data
  i794.mode = i795[0]
  i794.curveMin = new pc.AnimationCurve( { keys_flow: i795[1] } )
  i794.curveMax = new pc.AnimationCurve( { keys_flow: i795[2] } )
  i794.curveMultiplier = i795[3]
  i794.constantMin = i795[4]
  i794.constantMax = i795[5]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i796 = root || new pc.MinMaxGradient()
  var i797 = data
  i796.mode = i797[0]
  i796.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i797[1], i796.gradientMin)
  i796.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i797[2], i796.gradientMax)
  i796.colorMin = new pc.Color(i797[3], i797[4], i797[5], i797[6])
  i796.colorMax = new pc.Color(i797[7], i797[8], i797[9], i797[10])
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i799 = data
  i798.mode = i799[0]
  var i801 = i799[1]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i801[i + 0]) );
  }
  i798.colorKeys = i800
  var i803 = i799[2]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i803[i + 0]) );
  }
  i798.alphaKeys = i802
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i804 = root || new pc.ParticleSystemColorBySpeed()
  var i805 = data
  i804.enabled = !!i805[0]
  i804.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i805[1], i804.color)
  i804.range = new pc.Vec2( i805[2], i805[3] )
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i809 = data
  i808.color = new pc.Color(i809[0], i809[1], i809[2], i809[3])
  i808.time = i809[4]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i813 = data
  i812.alpha = i813[0]
  i812.time = i813[1]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i814 = root || new pc.ParticleSystemColorOverLifetime()
  var i815 = data
  i814.enabled = !!i815[0]
  i814.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i815[1], i814.color)
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i816 = root || new pc.ParticleSystemEmitter()
  var i817 = data
  i816.enabled = !!i817[0]
  i816.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[1], i816.rateOverTime)
  i816.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[2], i816.rateOverDistance)
  var i819 = i817[3]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i819[i + 0]) );
  }
  i816.bursts = i818
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i822 = root || new pc.ParticleSystemBurst()
  var i823 = data
  i822.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[0], i822.count)
  i822.cycleCount = i823[1]
  i822.minCount = i823[2]
  i822.maxCount = i823[3]
  i822.repeatInterval = i823[4]
  i822.time = i823[5]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i824 = root || new pc.ParticleSystemRotationBySpeed()
  var i825 = data
  i824.enabled = !!i825[0]
  i824.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[1], i824.x)
  i824.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[2], i824.y)
  i824.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[3], i824.z)
  i824.separateAxes = !!i825[4]
  i824.range = new pc.Vec2( i825[5], i825[6] )
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i826 = root || new pc.ParticleSystemRotationOverLifetime()
  var i827 = data
  i826.enabled = !!i827[0]
  i826.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[1], i826.x)
  i826.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[2], i826.y)
  i826.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[3], i826.z)
  i826.separateAxes = !!i827[4]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i828 = root || new pc.ParticleSystemShape()
  var i829 = data
  i828.enabled = !!i829[0]
  i828.shapeType = i829[1]
  i828.randomDirectionAmount = i829[2]
  i828.sphericalDirectionAmount = i829[3]
  i828.randomPositionAmount = i829[4]
  i828.alignToDirection = !!i829[5]
  i828.radius = i829[6]
  i828.radiusMode = i829[7]
  i828.radiusSpread = i829[8]
  i828.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[9], i828.radiusSpeed)
  i828.radiusThickness = i829[10]
  i828.angle = i829[11]
  i828.length = i829[12]
  i828.boxThickness = new pc.Vec3( i829[13], i829[14], i829[15] )
  i828.meshShapeType = i829[16]
  request.r(i829[17], i829[18], 0, i828, 'mesh')
  request.r(i829[19], i829[20], 0, i828, 'meshRenderer')
  request.r(i829[21], i829[22], 0, i828, 'skinnedMeshRenderer')
  i828.useMeshMaterialIndex = !!i829[23]
  i828.meshMaterialIndex = i829[24]
  i828.useMeshColors = !!i829[25]
  i828.normalOffset = i829[26]
  i828.arc = i829[27]
  i828.arcMode = i829[28]
  i828.arcSpread = i829[29]
  i828.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[30], i828.arcSpeed)
  i828.donutRadius = i829[31]
  i828.position = new pc.Vec3( i829[32], i829[33], i829[34] )
  i828.rotation = new pc.Vec3( i829[35], i829[36], i829[37] )
  i828.scale = new pc.Vec3( i829[38], i829[39], i829[40] )
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i830 = root || new pc.ParticleSystemSizeBySpeed()
  var i831 = data
  i830.enabled = !!i831[0]
  i830.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[1], i830.x)
  i830.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[2], i830.y)
  i830.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[3], i830.z)
  i830.separateAxes = !!i831[4]
  i830.range = new pc.Vec2( i831[5], i831[6] )
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i832 = root || new pc.ParticleSystemSizeOverLifetime()
  var i833 = data
  i832.enabled = !!i833[0]
  i832.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[1], i832.x)
  i832.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[2], i832.y)
  i832.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[3], i832.z)
  i832.separateAxes = !!i833[4]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i834 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i835 = data
  i834.enabled = !!i835[0]
  i834.mode = i835[1]
  i834.animation = i835[2]
  i834.numTilesX = i835[3]
  i834.numTilesY = i835[4]
  i834.useRandomRow = !!i835[5]
  i834.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[6], i834.frameOverTime)
  i834.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[7], i834.startFrame)
  i834.cycleCount = i835[8]
  i834.rowIndex = i835[9]
  i834.flipU = i835[10]
  i834.flipV = i835[11]
  i834.spriteCount = i835[12]
  var i837 = i835[13]
  var i836 = []
  for(var i = 0; i < i837.length; i += 2) {
  request.r(i837[i + 0], i837[i + 1], 2, i836, '')
  }
  i834.sprites = i836
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i840 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i841 = data
  i840.enabled = !!i841[0]
  i840.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[1], i840.x)
  i840.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[2], i840.y)
  i840.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[3], i840.z)
  i840.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[4], i840.radial)
  i840.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[5], i840.speedModifier)
  i840.space = i841[6]
  i840.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[7], i840.orbitalX)
  i840.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[8], i840.orbitalY)
  i840.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[9], i840.orbitalZ)
  i840.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[10], i840.orbitalOffsetX)
  i840.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[11], i840.orbitalOffsetY)
  i840.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[12], i840.orbitalOffsetZ)
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i842 = root || new pc.ParticleSystemNoise()
  var i843 = data
  i842.enabled = !!i843[0]
  i842.separateAxes = !!i843[1]
  i842.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[2], i842.strengthX)
  i842.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[3], i842.strengthY)
  i842.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[4], i842.strengthZ)
  i842.frequency = i843[5]
  i842.damping = !!i843[6]
  i842.octaveCount = i843[7]
  i842.octaveMultiplier = i843[8]
  i842.octaveScale = i843[9]
  i842.quality = i843[10]
  i842.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[11], i842.scrollSpeed)
  i842.scrollSpeedMultiplier = i843[12]
  i842.remapEnabled = !!i843[13]
  i842.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[14], i842.remapX)
  i842.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[15], i842.remapY)
  i842.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[16], i842.remapZ)
  i842.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[17], i842.positionAmount)
  i842.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[18], i842.rotationAmount)
  i842.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[19], i842.sizeAmount)
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i844 = root || new pc.ParticleSystemInheritVelocity()
  var i845 = data
  i844.enabled = !!i845[0]
  i844.mode = i845[1]
  i844.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[2], i844.curve)
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i846 = root || new pc.ParticleSystemForceOverLifetime()
  var i847 = data
  i846.enabled = !!i847[0]
  i846.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[1], i846.x)
  i846.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[2], i846.y)
  i846.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[3], i846.z)
  i846.space = i847[4]
  i846.randomized = !!i847[5]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i848 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i849 = data
  i848.enabled = !!i849[0]
  i848.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i849[1], i848.limit)
  i848.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i849[2], i848.limitX)
  i848.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i849[3], i848.limitY)
  i848.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i849[4], i848.limitZ)
  i848.dampen = i849[5]
  i848.separateAxes = !!i849[6]
  i848.space = i849[7]
  i848.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i849[8], i848.drag)
  i848.multiplyDragByParticleSize = !!i849[9]
  i848.multiplyDragByParticleVelocity = !!i849[10]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i851 = data
  request.r(i851[0], i851[1], 0, i850, 'mesh')
  i850.meshCount = i851[2]
  i850.activeVertexStreamsCount = i851[3]
  i850.alignment = i851[4]
  i850.renderMode = i851[5]
  i850.sortMode = i851[6]
  i850.lengthScale = i851[7]
  i850.velocityScale = i851[8]
  i850.cameraVelocityScale = i851[9]
  i850.normalDirection = i851[10]
  i850.sortingFudge = i851[11]
  i850.minParticleSize = i851[12]
  i850.maxParticleSize = i851[13]
  i850.pivot = new pc.Vec3( i851[14], i851[15], i851[16] )
  request.r(i851[17], i851[18], 0, i850, 'trailMaterial')
  i850.applyActiveColorSpace = !!i851[19]
  i850.enabled = !!i851[20]
  request.r(i851[21], i851[22], 0, i850, 'sharedMaterial')
  var i853 = i851[23]
  var i852 = []
  for(var i = 0; i < i853.length; i += 2) {
  request.r(i853[i + 0], i853[i + 1], 2, i852, '')
  }
  i850.sharedMaterials = i852
  i850.receiveShadows = !!i851[24]
  i850.shadowCastingMode = i851[25]
  i850.sortingLayerID = i851[26]
  i850.sortingOrder = i851[27]
  i850.lightmapIndex = i851[28]
  i850.lightmapSceneIndex = i851[29]
  i850.lightmapScaleOffset = new pc.Vec4( i851[30], i851[31], i851[32], i851[33] )
  i850.lightProbeUsage = i851[34]
  i850.reflectionProbeUsage = i851[35]
  return i850
}

Deserializers["MergeEffect"] = function (request, data, root) {
  var i856 = root || request.c( 'MergeEffect' )
  var i857 = data
  request.r(i857[0], i857[1], 0, i856, 'tf')
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i859 = data
  i858.name = i859[0]
  i858.tagId = i859[1]
  i858.enabled = !!i859[2]
  i858.isStatic = !!i859[3]
  i858.layer = i859[4]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i861 = data
  i860.name = i861[0]
  i860.halfPrecision = !!i861[1]
  i860.useSimplification = !!i861[2]
  i860.useUInt32IndexFormat = !!i861[3]
  i860.vertexCount = i861[4]
  i860.aabb = i861[5]
  var i863 = i861[6]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( !!i863[i + 0] );
  }
  i860.streams = i862
  i860.vertices = i861[7]
  var i865 = i861[8]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i865[i + 0]) );
  }
  i860.subMeshes = i864
  var i867 = i861[9]
  var i866 = []
  for(var i = 0; i < i867.length; i += 16) {
    i866.push( new pc.Mat4().setData(i867[i + 0], i867[i + 1], i867[i + 2], i867[i + 3],  i867[i + 4], i867[i + 5], i867[i + 6], i867[i + 7],  i867[i + 8], i867[i + 9], i867[i + 10], i867[i + 11],  i867[i + 12], i867[i + 13], i867[i + 14], i867[i + 15]) );
  }
  i860.bindposes = i866
  var i869 = i861[10]
  var i868 = []
  for(var i = 0; i < i869.length; i += 1) {
    i868.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i869[i + 0]) );
  }
  i860.blendShapes = i868
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i875 = data
  i874.triangles = i875[0]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i881 = data
  i880.name = i881[0]
  var i883 = i881[1]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i883[i + 0]) );
  }
  i880.frames = i882
  return i880
}

Deserializers["BlinkEffect"] = function (request, data, root) {
  var i884 = root || request.c( 'BlinkEffect' )
  var i885 = data
  request.r(i885[0], i885[1], 0, i884, 'tf')
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i887 = data
  i886.name = i887[0]
  i886.index = i887[1]
  i886.startup = !!i887[2]
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i889 = data
  i888.pivot = new pc.Vec2( i889[0], i889[1] )
  i888.anchorMin = new pc.Vec2( i889[2], i889[3] )
  i888.anchorMax = new pc.Vec2( i889[4], i889[5] )
  i888.sizeDelta = new pc.Vec2( i889[6], i889[7] )
  i888.anchoredPosition3D = new pc.Vec3( i889[8], i889[9], i889[10] )
  i888.rotation = new pc.Quat(i889[11], i889[12], i889[13], i889[14])
  i888.scale = new pc.Vec3( i889[15], i889[16], i889[17] )
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i891 = data
  i890.planeDistance = i891[0]
  i890.referencePixelsPerUnit = i891[1]
  i890.isFallbackOverlay = !!i891[2]
  i890.renderMode = i891[3]
  i890.renderOrder = i891[4]
  i890.sortingLayerName = i891[5]
  i890.sortingOrder = i891[6]
  i890.scaleFactor = i891[7]
  request.r(i891[8], i891[9], 0, i890, 'worldCamera')
  i890.overrideSorting = !!i891[10]
  i890.pixelPerfect = !!i891[11]
  i890.targetDisplay = i891[12]
  i890.overridePixelPerfect = !!i891[13]
  i890.enabled = !!i891[14]
  return i890
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i892 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i893 = data
  i892.m_UiScaleMode = i893[0]
  i892.m_ReferencePixelsPerUnit = i893[1]
  i892.m_ScaleFactor = i893[2]
  i892.m_ReferenceResolution = new pc.Vec2( i893[3], i893[4] )
  i892.m_ScreenMatchMode = i893[5]
  i892.m_MatchWidthOrHeight = i893[6]
  i892.m_PhysicalUnit = i893[7]
  i892.m_FallbackScreenDPI = i893[8]
  i892.m_DefaultSpriteDPI = i893[9]
  i892.m_DynamicPixelsPerUnit = i893[10]
  i892.m_PresetInfoIsWorld = !!i893[11]
  return i892
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i894 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i895 = data
  i894.m_IgnoreReversedGraphics = !!i895[0]
  i894.m_BlockingObjects = i895[1]
  i894.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i895[2] )
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i897 = data
  request.r(i897[0], i897[1], 0, i896, 'animatorController')
  request.r(i897[2], i897[3], 0, i896, 'avatar')
  i896.updateMode = i897[4]
  i896.hasTransformHierarchy = !!i897[5]
  i896.applyRootMotion = !!i897[6]
  var i899 = i897[7]
  var i898 = []
  for(var i = 0; i < i899.length; i += 2) {
  request.r(i899[i + 0], i899[i + 1], 2, i898, '')
  }
  i896.humanBones = i898
  i896.enabled = !!i897[8]
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i903 = data
  i902.cullTransparentMesh = !!i903[0]
  return i902
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i904 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i905 = data
  i904.m_hasFontAssetChanged = !!i905[0]
  request.r(i905[1], i905[2], 0, i904, 'm_baseMaterial')
  i904.m_maskOffset = new pc.Vec4( i905[3], i905[4], i905[5], i905[6] )
  i904.m_text = i905[7]
  i904.m_isRightToLeft = !!i905[8]
  request.r(i905[9], i905[10], 0, i904, 'm_fontAsset')
  request.r(i905[11], i905[12], 0, i904, 'm_sharedMaterial')
  var i907 = i905[13]
  var i906 = []
  for(var i = 0; i < i907.length; i += 2) {
  request.r(i907[i + 0], i907[i + 1], 2, i906, '')
  }
  i904.m_fontSharedMaterials = i906
  request.r(i905[14], i905[15], 0, i904, 'm_fontMaterial')
  var i909 = i905[16]
  var i908 = []
  for(var i = 0; i < i909.length; i += 2) {
  request.r(i909[i + 0], i909[i + 1], 2, i908, '')
  }
  i904.m_fontMaterials = i908
  i904.m_fontColor32 = UnityEngine.Color32.ConstructColor(i905[17], i905[18], i905[19], i905[20])
  i904.m_fontColor = new pc.Color(i905[21], i905[22], i905[23], i905[24])
  i904.m_enableVertexGradient = !!i905[25]
  i904.m_colorMode = i905[26]
  i904.m_fontColorGradient = request.d('TMPro.VertexGradient', i905[27], i904.m_fontColorGradient)
  request.r(i905[28], i905[29], 0, i904, 'm_fontColorGradientPreset')
  request.r(i905[30], i905[31], 0, i904, 'm_spriteAsset')
  i904.m_tintAllSprites = !!i905[32]
  request.r(i905[33], i905[34], 0, i904, 'm_StyleSheet')
  i904.m_TextStyleHashCode = i905[35]
  i904.m_overrideHtmlColors = !!i905[36]
  i904.m_faceColor = UnityEngine.Color32.ConstructColor(i905[37], i905[38], i905[39], i905[40])
  i904.m_fontSize = i905[41]
  i904.m_fontSizeBase = i905[42]
  i904.m_fontWeight = i905[43]
  i904.m_enableAutoSizing = !!i905[44]
  i904.m_fontSizeMin = i905[45]
  i904.m_fontSizeMax = i905[46]
  i904.m_fontStyle = i905[47]
  i904.m_HorizontalAlignment = i905[48]
  i904.m_VerticalAlignment = i905[49]
  i904.m_textAlignment = i905[50]
  i904.m_characterSpacing = i905[51]
  i904.m_wordSpacing = i905[52]
  i904.m_lineSpacing = i905[53]
  i904.m_lineSpacingMax = i905[54]
  i904.m_paragraphSpacing = i905[55]
  i904.m_charWidthMaxAdj = i905[56]
  i904.m_TextWrappingMode = i905[57]
  i904.m_wordWrappingRatios = i905[58]
  i904.m_overflowMode = i905[59]
  request.r(i905[60], i905[61], 0, i904, 'm_linkedTextComponent')
  request.r(i905[62], i905[63], 0, i904, 'parentLinkedComponent')
  i904.m_enableKerning = !!i905[64]
  var i911 = i905[65]
  var i910 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i911.length; i += 1) {
    i910.add(i911[i + 0]);
  }
  i904.m_ActiveFontFeatures = i910
  i904.m_enableExtraPadding = !!i905[66]
  i904.checkPaddingRequired = !!i905[67]
  i904.m_isRichText = !!i905[68]
  i904.m_parseCtrlCharacters = !!i905[69]
  i904.m_isOrthographic = !!i905[70]
  i904.m_isCullingEnabled = !!i905[71]
  i904.m_horizontalMapping = i905[72]
  i904.m_verticalMapping = i905[73]
  i904.m_uvLineOffset = i905[74]
  i904.m_geometrySortingOrder = i905[75]
  i904.m_IsTextObjectScaleStatic = !!i905[76]
  i904.m_VertexBufferAutoSizeReduction = !!i905[77]
  i904.m_useMaxVisibleDescender = !!i905[78]
  i904.m_pageToDisplay = i905[79]
  i904.m_margin = new pc.Vec4( i905[80], i905[81], i905[82], i905[83] )
  i904.m_isUsingLegacyAnimationComponent = !!i905[84]
  i904.m_isVolumetricText = !!i905[85]
  request.r(i905[86], i905[87], 0, i904, 'm_Material')
  i904.m_EmojiFallbackSupport = !!i905[88]
  i904.m_Maskable = !!i905[89]
  i904.m_Color = new pc.Color(i905[90], i905[91], i905[92], i905[93])
  i904.m_RaycastTarget = !!i905[94]
  i904.m_RaycastPadding = new pc.Vec4( i905[95], i905[96], i905[97], i905[98] )
  return i904
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i912 = root || request.c( 'TMPro.VertexGradient' )
  var i913 = data
  i912.topLeft = new pc.Color(i913[0], i913[1], i913[2], i913[3])
  i912.topRight = new pc.Color(i913[4], i913[5], i913[6], i913[7])
  i912.bottomLeft = new pc.Color(i913[8], i913[9], i913[10], i913[11])
  i912.bottomRight = new pc.Color(i913[12], i913[13], i913[14], i913[15])
  return i912
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i916 = root || request.c( 'UnityEngine.UI.Slider' )
  var i917 = data
  request.r(i917[0], i917[1], 0, i916, 'm_FillRect')
  request.r(i917[2], i917[3], 0, i916, 'm_HandleRect')
  i916.m_Direction = i917[4]
  i916.m_MinValue = i917[5]
  i916.m_MaxValue = i917[6]
  i916.m_WholeNumbers = !!i917[7]
  i916.m_Value = i917[8]
  i916.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i917[9], i916.m_OnValueChanged)
  i916.m_Navigation = request.d('UnityEngine.UI.Navigation', i917[10], i916.m_Navigation)
  i916.m_Transition = i917[11]
  i916.m_Colors = request.d('UnityEngine.UI.ColorBlock', i917[12], i916.m_Colors)
  i916.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i917[13], i916.m_SpriteState)
  i916.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i917[14], i916.m_AnimationTriggers)
  i916.m_Interactable = !!i917[15]
  request.r(i917[16], i917[17], 0, i916, 'm_TargetGraphic')
  return i916
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i918 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i919 = data
  i918.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i919[0], i918.m_PersistentCalls)
  return i918
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i920 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i921 = data
  var i923 = i921[0]
  var i922 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i923.length; i += 1) {
    i922.add(request.d('UnityEngine.Events.PersistentCall', i923[i + 0]));
  }
  i920.m_Calls = i922
  return i920
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i926 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i927 = data
  request.r(i927[0], i927[1], 0, i926, 'm_Target')
  i926.m_TargetAssemblyTypeName = i927[2]
  i926.m_MethodName = i927[3]
  i926.m_Mode = i927[4]
  i926.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i927[5], i926.m_Arguments)
  i926.m_CallState = i927[6]
  return i926
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i928 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i929 = data
  i928.m_Mode = i929[0]
  i928.m_WrapAround = !!i929[1]
  request.r(i929[2], i929[3], 0, i928, 'm_SelectOnUp')
  request.r(i929[4], i929[5], 0, i928, 'm_SelectOnDown')
  request.r(i929[6], i929[7], 0, i928, 'm_SelectOnLeft')
  request.r(i929[8], i929[9], 0, i928, 'm_SelectOnRight')
  return i928
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i930 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i931 = data
  i930.m_NormalColor = new pc.Color(i931[0], i931[1], i931[2], i931[3])
  i930.m_HighlightedColor = new pc.Color(i931[4], i931[5], i931[6], i931[7])
  i930.m_PressedColor = new pc.Color(i931[8], i931[9], i931[10], i931[11])
  i930.m_SelectedColor = new pc.Color(i931[12], i931[13], i931[14], i931[15])
  i930.m_DisabledColor = new pc.Color(i931[16], i931[17], i931[18], i931[19])
  i930.m_ColorMultiplier = i931[20]
  i930.m_FadeDuration = i931[21]
  return i930
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i932 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i933 = data
  request.r(i933[0], i933[1], 0, i932, 'm_HighlightedSprite')
  request.r(i933[2], i933[3], 0, i932, 'm_PressedSprite')
  request.r(i933[4], i933[5], 0, i932, 'm_SelectedSprite')
  request.r(i933[6], i933[7], 0, i932, 'm_DisabledSprite')
  return i932
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i934 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i935 = data
  i934.m_NormalTrigger = i935[0]
  i934.m_HighlightedTrigger = i935[1]
  i934.m_PressedTrigger = i935[2]
  i934.m_SelectedTrigger = i935[3]
  i934.m_DisabledTrigger = i935[4]
  return i934
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i936 = root || request.c( 'UnityEngine.UI.Image' )
  var i937 = data
  request.r(i937[0], i937[1], 0, i936, 'm_Sprite')
  i936.m_Type = i937[2]
  i936.m_PreserveAspect = !!i937[3]
  i936.m_FillCenter = !!i937[4]
  i936.m_FillMethod = i937[5]
  i936.m_FillAmount = i937[6]
  i936.m_FillClockwise = !!i937[7]
  i936.m_FillOrigin = i937[8]
  i936.m_UseSpriteMesh = !!i937[9]
  i936.m_PixelsPerUnitMultiplier = i937[10]
  request.r(i937[11], i937[12], 0, i936, 'm_Material')
  i936.m_Maskable = !!i937[13]
  i936.m_Color = new pc.Color(i937[14], i937[15], i937[16], i937[17])
  i936.m_RaycastTarget = !!i937[18]
  i936.m_RaycastPadding = new pc.Vec4( i937[19], i937[20], i937[21], i937[22] )
  return i936
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i938 = root || request.c( 'UnityEngine.UI.Button' )
  var i939 = data
  i938.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i939[0], i938.m_OnClick)
  i938.m_Navigation = request.d('UnityEngine.UI.Navigation', i939[1], i938.m_Navigation)
  i938.m_Transition = i939[2]
  i938.m_Colors = request.d('UnityEngine.UI.ColorBlock', i939[3], i938.m_Colors)
  i938.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i939[4], i938.m_SpriteState)
  i938.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i939[5], i938.m_AnimationTriggers)
  i938.m_Interactable = !!i939[6]
  request.r(i939[7], i939[8], 0, i938, 'm_TargetGraphic')
  return i938
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i940 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i941 = data
  i940.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i941[0], i940.m_PersistentCalls)
  return i940
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i942 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i943 = data
  request.r(i943[0], i943[1], 0, i942, 'm_ObjectArgument')
  i942.m_ObjectArgumentAssemblyTypeName = i943[2]
  i942.m_IntArgument = i943[3]
  i942.m_FloatArgument = i943[4]
  i942.m_StringArgument = i943[5]
  i942.m_BoolArgument = !!i943[6]
  return i942
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i944 = root || request.c( 'Ply_Pool' )
  var i945 = data
  var i947 = i945[0]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( request.d('Ply_Pool+PoolAmount', i947[i + 0]) );
  }
  i944.poolAmounts = i946
  request.r(i945[1], i945[2], 0, i944, 'poolHolder')
  return i944
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i950 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i951 = data
  i950.type = i951[0]
  i950.amount = i951[1]
  request.r(i951[2], i951[3], 0, i950, 'gameUnit')
  return i950
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i952 = root || request.c( 'Ply_SoundManager' )
  var i953 = data
  var i955 = i953[0]
  var i954 = []
  for(var i = 0; i < i955.length; i += 1) {
    i954.push( request.d('Ply_SoundManager+FxAudio', i955[i + 0]) );
  }
  i952.fxAudios = i954
  var i957 = i953[1]
  var i956 = []
  for(var i = 0; i < i957.length; i += 2) {
  request.r(i957[i + 0], i957[i + 1], 2, i956, '')
  }
  i952.audioClips = i956
  request.r(i953[2], i953[3], 0, i952, 'sound')
  return i952
}

Deserializers["Ply_SoundManager+FxAudio"] = function (request, data, root) {
  var i960 = root || request.c( 'Ply_SoundManager+FxAudio' )
  var i961 = data
  i960.fxType = i961[0]
  request.r(i961[1], i961[2], 0, i960, 'audioClip')
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i965 = data
  request.r(i965[0], i965[1], 0, i964, 'clip')
  request.r(i965[2], i965[3], 0, i964, 'outputAudioMixerGroup')
  i964.playOnAwake = !!i965[4]
  i964.loop = !!i965[5]
  i964.time = i965[6]
  i964.volume = i965[7]
  i964.pitch = i965[8]
  i964.enabled = !!i965[9]
  return i964
}

Deserializers["GameManager"] = function (request, data, root) {
  var i966 = root || request.c( 'GameManager' )
  var i967 = data
  i966.isPlaying = !!i967[0]
  i966.isTutorial = !!i967[1]
  i966.isGotoStore = !!i967[2]
  i966.isDraggingConveyor = !!i967[3]
  i966.countMove = i967[4]
  i966.maxMove = i967[5]
  i966.startLayer = i967[6]
  i966.currentLayer = i967[7]
  request.r(i967[8], i967[9], 0, i966, 'mainBox')
  request.r(i967[10], i967[11], 0, i966, 'itemConveyor')
  request.r(i967[12], i967[13], 0, i966, 'handTutorial')
  i966.tutorialDelay = i967[14]
  return i966
}

Deserializers["UIManager"] = function (request, data, root) {
  var i968 = root || request.c( 'UIManager' )
  var i969 = data
  request.r(i969[0], i969[1], 0, i968, 'winUI')
  request.r(i969[2], i969[3], 0, i968, 'loseUI')
  request.r(i969[4], i969[5], 0, i968, 'tutorial')
  request.r(i969[6], i969[7], 0, i968, 'verticalUI')
  request.r(i969[8], i969[9], 0, i968, 'horizontalUI')
  request.r(i969[10], i969[11], 0, i968, 'downloadBtnVertical')
  request.r(i969[12], i969[13], 0, i968, 'dowloadBtnHorizontal')
  request.r(i969[14], i969[15], 0, i968, 'textAnim')
  i968.isGoogleBuild = !!i969[16]
  request.r(i969[17], i969[18], 0, i968, 'progressSlider')
  request.r(i969[19], i969[20], 0, i968, 'progressText')
  i968.maxProgressItems = i969[21]
  i968.startProgressItems = i969[22]
  i968.screenWidth = i969[23]
  i968.screenHeight = i969[24]
  i968.scaleHeightOnWidth = i969[25]
  i968.isVertical = !!i969[26]
  i968.isScreenVertical = !!i969[27]
  request.r(i969[28], i969[29], 0, i968, 'cam')
  i968.verticalUIHeightOnWidthRatio = i969[30]
  i968.screenVerticalHeightOnWidthRatio = i969[31]
  i968.introZoomOutMultiplier = i969[32]
  i968.cameraZoomDuration = i969[33]
  i968.useContinuousScaling = !!i969[34]
  i968.baseOrthographicSize = i969[35]
  i968.baseAspect = i969[36]
  i968.landscapeSize = i969[37]
  i968.defaultPortraitSize = i969[38]
  var i971 = i969[39]
  var i970 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i971.length; i += 1) {
    i970.add(request.d('ScreenScaleStep', i971[i + 0]));
  }
  i968.discreteScaleSteps = i970
  i968.usePerspectiveCamera = !!i969[40]
  request.r(i969[41], i969[42], 0, i968, 'perspectiveFocus')
  i968.perspectiveFocusDistance = i969[43]
  i968.perspectivePadding = i969[44]
  i968.fitRendererBounds = !!i969[45]
  request.r(i969[46], i969[47], 0, i968, 'boundsRoot')
  var i973 = i969[48]
  var i972 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i973.length; i += 2) {
  request.r(i973[i + 0], i973[i + 1], 1, i972, '')
  }
  i968.boundsRenderers = i972
  return i968
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i976 = root || request.c( 'ScreenScaleStep' )
  var i977 = data
  i976.heightOnWidthRatio = i977[0]
  i976.orthographicSize = i977[1]
  return i976
}

Deserializers["InputManager"] = function (request, data, root) {
  var i980 = root || request.c( 'InputManager' )
  var i981 = data
  i980.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i981[0] )
  i980.targetLayer = UnityEngine.LayerMask.FromIntegerValue( i981[1] )
  i980.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i981[2] )
  i980.boxLayer = UnityEngine.LayerMask.FromIntegerValue( i981[3] )
  i980.conveyorLayer = UnityEngine.LayerMask.FromIntegerValue( i981[4] )
  i980.isDragging = !!i981[5]
  request.r(i981[6], i981[7], 0, i980, 'mainCamera')
  return i980
}

Deserializers["CameraController"] = function (request, data, root) {
  var i982 = root || request.c( 'CameraController' )
  var i983 = data
  request.r(i983[0], i983[1], 0, i982, 'targetCamera')
  i982.enableZoom = !!i983[2]
  i982.minZoomRatio = i983[3]
  i982.maxZoomRatio = i983[4]
  i982.mouseWheelZoomSpeed = i983[5]
  i982.pinchZoomSpeed = i983[6]
  request.r(i983[7], i983[8], 0, i982, 'conveyor')
  i982.enableDrag = !!i983[9]
  i982.horizontalOnly = !!i983[10]
  i982.dragSensitivity = i983[11]
  i982.maxHorizontalOffset = i983[12]
  i982.maxVerticalOffset = i983[13]
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i985 = data
  i984.aspect = i985[0]
  i984.orthographic = !!i985[1]
  i984.orthographicSize = i985[2]
  i984.backgroundColor = new pc.Color(i985[3], i985[4], i985[5], i985[6])
  i984.nearClipPlane = i985[7]
  i984.farClipPlane = i985[8]
  i984.fieldOfView = i985[9]
  i984.depth = i985[10]
  i984.clearFlags = i985[11]
  i984.cullingMask = i985[12]
  i984.rect = i985[13]
  request.r(i985[14], i985[15], 0, i984, 'targetTexture')
  i984.usePhysicalProperties = !!i985[16]
  i984.focalLength = i985[17]
  i984.sensorSize = new pc.Vec2( i985[18], i985[19] )
  i984.lensShift = new pc.Vec2( i985[20], i985[21] )
  i984.gateFit = i985[22]
  i984.commandBufferCount = i985[23]
  i984.cameraType = i985[24]
  i984.enabled = !!i985[25]
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i987 = data
  i986.type = i987[0]
  i986.color = new pc.Color(i987[1], i987[2], i987[3], i987[4])
  i986.cullingMask = i987[5]
  i986.intensity = i987[6]
  i986.range = i987[7]
  i986.spotAngle = i987[8]
  i986.shadows = i987[9]
  i986.shadowNormalBias = i987[10]
  i986.shadowBias = i987[11]
  i986.shadowStrength = i987[12]
  i986.shadowResolution = i987[13]
  i986.lightmapBakeType = i987[14]
  i986.renderMode = i987[15]
  request.r(i987[16], i987[17], 0, i986, 'cookie')
  i986.cookieSize = i987[18]
  i986.shadowNearPlane = i987[19]
  i986.occlusionMaskChannel = i987[20]
  i986.enabled = !!i987[21]
  return i986
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i988 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i989 = data
  request.r(i989[0], i989[1], 0, i988, 'm_FirstSelected')
  i988.m_sendNavigationEvents = !!i989[2]
  i988.m_DragThreshold = i989[3]
  return i988
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i990 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i991 = data
  i990.m_HorizontalAxis = i991[0]
  i990.m_VerticalAxis = i991[1]
  i990.m_SubmitButton = i991[2]
  i990.m_CancelButton = i991[3]
  i990.m_InputActionsPerSecond = i991[4]
  i990.m_RepeatDelay = i991[5]
  i990.m_ForceModuleActive = !!i991[6]
  i990.m_SendPointerHoverToParent = !!i991[7]
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i993 = data
  i992.color = new pc.Color(i993[0], i993[1], i993[2], i993[3])
  request.r(i993[4], i993[5], 0, i992, 'sprite')
  i992.flipX = !!i993[6]
  i992.flipY = !!i993[7]
  i992.drawMode = i993[8]
  i992.size = new pc.Vec2( i993[9], i993[10] )
  i992.tileMode = i993[11]
  i992.adaptiveModeThreshold = i993[12]
  i992.maskInteraction = i993[13]
  i992.spriteSortPoint = i993[14]
  i992.enabled = !!i993[15]
  request.r(i993[16], i993[17], 0, i992, 'sharedMaterial')
  var i995 = i993[18]
  var i994 = []
  for(var i = 0; i < i995.length; i += 2) {
  request.r(i995[i + 0], i995[i + 1], 2, i994, '')
  }
  i992.sharedMaterials = i994
  i992.receiveShadows = !!i993[19]
  i992.shadowCastingMode = i993[20]
  i992.sortingLayerID = i993[21]
  i992.sortingOrder = i993[22]
  i992.lightmapIndex = i993[23]
  i992.lightmapSceneIndex = i993[24]
  i992.lightmapScaleOffset = new pc.Vec4( i993[25], i993[26], i993[27], i993[28] )
  i992.lightProbeUsage = i993[29]
  i992.reflectionProbeUsage = i993[30]
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i997 = data
  i996.center = new pc.Vec3( i997[0], i997[1], i997[2] )
  i996.radius = i997[3]
  i996.enabled = !!i997[4]
  i996.isTrigger = !!i997[5]
  request.r(i997[6], i997[7], 0, i996, 'material')
  return i996
}

Deserializers["Box"] = function (request, data, root) {
  var i998 = root || request.c( 'Box' )
  var i999 = data
  i998.useBox = !!i999[0]
  i998.spawnMode = i999[1]
  var i1001 = i999[2]
  var i1000 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i1001.length; i += 2) {
  request.r(i1001[i + 0], i1001[i + 1], 1, i1000, '')
  }
  i998.dynamicItems = i1000
  var i1003 = i999[3]
  var i1002 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1003.length; i += 2) {
  request.r(i1003[i + 0], i1003[i + 1], 1, i1002, '')
  }
  i998.spawnTargets = i1002
  i998.initialSpawnCount = i999[4]
  i998.revealDuration = i999[5]
  i998.showInitialBatchShadowsOnSpawn = !!i999[6]
  request.r(i999[7], i999[8], 0, i998, 'mainConveyor')
  request.r(i999[9], i999[10], 0, i998, 'graphicController')
  return i998
}

Deserializers["BoxGraphicController"] = function (request, data, root) {
  var i1008 = root || request.c( 'BoxGraphicController' )
  var i1009 = data
  request.r(i1009[0], i1009[1], 0, i1008, 'skeletonAnimation')
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1011 = data
  request.r(i1011[0], i1011[1], 0, i1010, 'sharedMesh')
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1013 = data
  request.r(i1013[0], i1013[1], 0, i1012, 'additionalVertexStreams')
  i1012.enabled = !!i1013[2]
  request.r(i1013[3], i1013[4], 0, i1012, 'sharedMaterial')
  var i1015 = i1013[5]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 2) {
  request.r(i1015[i + 0], i1015[i + 1], 2, i1014, '')
  }
  i1012.sharedMaterials = i1014
  i1012.receiveShadows = !!i1013[6]
  i1012.shadowCastingMode = i1013[7]
  i1012.sortingLayerID = i1013[8]
  i1012.sortingOrder = i1013[9]
  i1012.lightmapIndex = i1013[10]
  i1012.lightmapSceneIndex = i1013[11]
  i1012.lightmapScaleOffset = new pc.Vec4( i1013[12], i1013[13], i1013[14], i1013[15] )
  i1012.lightProbeUsage = i1013[16]
  i1012.reflectionProbeUsage = i1013[17]
  return i1012
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i1016 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i1017 = data
  i1016.loop = !!i1017[0]
  i1016.timeScale = i1017[1]
  request.r(i1017[2], i1017[3], 0, i1016, 'skeletonDataAsset')
  i1016.initialSkinName = i1017[4]
  i1016.fixPrefabOverrideViaMeshFilter = i1017[5]
  i1016.initialFlipX = !!i1017[6]
  i1016.initialFlipY = !!i1017[7]
  i1016.updateWhenInvisible = i1017[8]
  i1016.zSpacing = i1017[9]
  i1016.useClipping = !!i1017[10]
  i1016.immutableTriangles = !!i1017[11]
  i1016.pmaVertexColors = !!i1017[12]
  i1016.clearStateOnDisable = !!i1017[13]
  i1016.tintBlack = !!i1017[14]
  i1016.singleSubmesh = !!i1017[15]
  i1016.fixDrawOrder = !!i1017[16]
  i1016.addNormals = !!i1017[17]
  i1016.calculateTangents = !!i1017[18]
  i1016.maskInteraction = i1017[19]
  i1016.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i1017[20], i1016.maskMaterials)
  i1016.disableRenderingOnOverride = !!i1017[21]
  i1016._animationName = i1017[22]
  var i1019 = i1017[23]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.push( i1019[i + 0] );
  }
  i1016.separatorSlotNames = i1018
  return i1016
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i1020 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i1021 = data
  var i1023 = i1021[0]
  var i1022 = []
  for(var i = 0; i < i1023.length; i += 2) {
  request.r(i1023[i + 0], i1023[i + 1], 2, i1022, '')
  }
  i1020.materialsMaskDisabled = i1022
  var i1025 = i1021[1]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 2) {
  request.r(i1025[i + 0], i1025[i + 1], 2, i1024, '')
  }
  i1020.materialsInsideMask = i1024
  var i1027 = i1021[2]
  var i1026 = []
  for(var i = 0; i < i1027.length; i += 2) {
  request.r(i1027[i + 0], i1027[i + 1], 2, i1026, '')
  }
  i1020.materialsOutsideMask = i1026
  return i1020
}

Deserializers["ItemHolder"] = function (request, data, root) {
  var i1030 = root || request.c( 'ItemHolder' )
  var i1031 = data
  i1030.id = i1031[0]
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1033 = data
  i1032.center = new pc.Vec3( i1033[0], i1033[1], i1033[2] )
  i1032.size = new pc.Vec3( i1033[3], i1033[4], i1033[5] )
  i1032.enabled = !!i1033[6]
  i1032.isTrigger = !!i1033[7]
  request.r(i1033[8], i1033[9], 0, i1032, 'material')
  return i1032
}

Deserializers["ItemSetupTool"] = function (request, data, root) {
  var i1034 = root || request.c( 'ItemSetupTool' )
  var i1035 = data
  request.r(i1035[0], i1035[1], 0, i1034, 'spritesParent')
  request.r(i1035[2], i1035[3], 0, i1034, 'holdersParent')
  i1034.shadowSuffix = i1035[4]
  i1034.holderPrefix = i1035[5]
  i1034.holdersParentName = i1035[6]
  i1034.colliderDepth = i1035[7]
  i1034.colliderSizeMultiplier = i1035[8]
  i1034.generatedShadowColor = new pc.Color(i1035[9], i1035[10], i1035[11], i1035[12])
  i1034.fadedBlackShadowColor = new pc.Color(i1035[13], i1035[14], i1035[15], i1035[16])
  i1034.generatedShadowLocalOffset = new pc.Vec3( i1035[17], i1035[18], i1035[19] )
  i1034.itemLayerName = i1035[20]
  i1034.holderLayerName = i1035[21]
  return i1034
}

Deserializers["Item"] = function (request, data, root) {
  var i1036 = root || request.c( 'Item' )
  var i1037 = data
  i1036.fxTypeOnPlace = i1037[0]
  i1036.id = i1037[1]
  i1036.currentState = i1037[2]
  i1036.itemHolderLayer = UnityEngine.LayerMask.FromIntegerValue( i1037[3] )
  request.r(i1037[4], i1037[5], 0, i1036, 'auraEffect')
  i1036.returnToSlotOnMiss = !!i1037[6]
  i1036.hideShadowOnDrop = !!i1037[7]
  i1036.scaleOnSpawn = !!i1037[8]
  i1036.spawnScaleMultiplier = i1037[9]
  var i1039 = i1037[10]
  var i1038 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i1039.length; i += 2) {
  request.r(i1039[i + 0], i1039[i + 1], 1, i1038, '')
  }
  i1036.requiredItems = i1038
  request.r(i1037[11], i1037[12], 0, i1036, 'correctHolderTransform')
  request.r(i1037[13], i1037[14], 0, i1036, 'shadowOnHolder')
  i1036.canShowShadowHint = !!i1037[15]
  request.r(i1037[16], i1037[17], 0, i1036, 'homeSlot')
  i1036.waitingPosition = new pc.Vec3( i1037[18], i1037[19], i1037[20] )
  request.r(i1037[21], i1037[22], 0, i1036, 'spriteRenderer')
  return i1036
}

Deserializers["ScreenHeightPositionAnchor"] = function (request, data, root) {
  var i1040 = root || request.c( 'ScreenHeightPositionAnchor' )
  var i1041 = data
  request.r(i1041[0], i1041[1], 0, i1040, 'anchorPoint')
  request.r(i1041[2], i1041[3], 0, i1040, 'targetCamera')
  i1040.viewportYRatio = i1041[4]
  i1040.alignOnStart = !!i1041[5]
  i1040.alignOnEnable = !!i1041[6]
  i1040.realignOnScreenSizeChanged = !!i1041[7]
  i1040.drawGizmos = !!i1041[8]
  i1040.targetLineColor = new pc.Color(i1041[9], i1041[10], i1041[11], i1041[12])
  i1040.anchorColor = new pc.Color(i1041[13], i1041[14], i1041[15], i1041[16])
  return i1040
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i1042 = root || request.c( 'TMPro.TextMeshPro' )
  var i1043 = data
  i1042._SortingLayer = i1043[0]
  i1042._SortingLayerID = i1043[1]
  i1042._SortingOrder = i1043[2]
  i1042.m_hasFontAssetChanged = !!i1043[3]
  request.r(i1043[4], i1043[5], 0, i1042, 'm_renderer')
  i1042.m_maskType = i1043[6]
  i1042.m_text = i1043[7]
  i1042.m_isRightToLeft = !!i1043[8]
  request.r(i1043[9], i1043[10], 0, i1042, 'm_fontAsset')
  request.r(i1043[11], i1043[12], 0, i1042, 'm_sharedMaterial')
  var i1045 = i1043[13]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 2) {
  request.r(i1045[i + 0], i1045[i + 1], 2, i1044, '')
  }
  i1042.m_fontSharedMaterials = i1044
  request.r(i1043[14], i1043[15], 0, i1042, 'm_fontMaterial')
  var i1047 = i1043[16]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 2) {
  request.r(i1047[i + 0], i1047[i + 1], 2, i1046, '')
  }
  i1042.m_fontMaterials = i1046
  i1042.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1043[17], i1043[18], i1043[19], i1043[20])
  i1042.m_fontColor = new pc.Color(i1043[21], i1043[22], i1043[23], i1043[24])
  i1042.m_enableVertexGradient = !!i1043[25]
  i1042.m_colorMode = i1043[26]
  i1042.m_fontColorGradient = request.d('TMPro.VertexGradient', i1043[27], i1042.m_fontColorGradient)
  request.r(i1043[28], i1043[29], 0, i1042, 'm_fontColorGradientPreset')
  request.r(i1043[30], i1043[31], 0, i1042, 'm_spriteAsset')
  i1042.m_tintAllSprites = !!i1043[32]
  request.r(i1043[33], i1043[34], 0, i1042, 'm_StyleSheet')
  i1042.m_TextStyleHashCode = i1043[35]
  i1042.m_overrideHtmlColors = !!i1043[36]
  i1042.m_faceColor = UnityEngine.Color32.ConstructColor(i1043[37], i1043[38], i1043[39], i1043[40])
  i1042.m_fontSize = i1043[41]
  i1042.m_fontSizeBase = i1043[42]
  i1042.m_fontWeight = i1043[43]
  i1042.m_enableAutoSizing = !!i1043[44]
  i1042.m_fontSizeMin = i1043[45]
  i1042.m_fontSizeMax = i1043[46]
  i1042.m_fontStyle = i1043[47]
  i1042.m_HorizontalAlignment = i1043[48]
  i1042.m_VerticalAlignment = i1043[49]
  i1042.m_textAlignment = i1043[50]
  i1042.m_characterSpacing = i1043[51]
  i1042.m_wordSpacing = i1043[52]
  i1042.m_lineSpacing = i1043[53]
  i1042.m_lineSpacingMax = i1043[54]
  i1042.m_paragraphSpacing = i1043[55]
  i1042.m_charWidthMaxAdj = i1043[56]
  i1042.m_TextWrappingMode = i1043[57]
  i1042.m_wordWrappingRatios = i1043[58]
  i1042.m_overflowMode = i1043[59]
  request.r(i1043[60], i1043[61], 0, i1042, 'm_linkedTextComponent')
  request.r(i1043[62], i1043[63], 0, i1042, 'parentLinkedComponent')
  i1042.m_enableKerning = !!i1043[64]
  var i1049 = i1043[65]
  var i1048 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.add(i1049[i + 0]);
  }
  i1042.m_ActiveFontFeatures = i1048
  i1042.m_enableExtraPadding = !!i1043[66]
  i1042.checkPaddingRequired = !!i1043[67]
  i1042.m_isRichText = !!i1043[68]
  i1042.m_parseCtrlCharacters = !!i1043[69]
  i1042.m_isOrthographic = !!i1043[70]
  i1042.m_isCullingEnabled = !!i1043[71]
  i1042.m_horizontalMapping = i1043[72]
  i1042.m_verticalMapping = i1043[73]
  i1042.m_uvLineOffset = i1043[74]
  i1042.m_geometrySortingOrder = i1043[75]
  i1042.m_IsTextObjectScaleStatic = !!i1043[76]
  i1042.m_VertexBufferAutoSizeReduction = !!i1043[77]
  i1042.m_useMaxVisibleDescender = !!i1043[78]
  i1042.m_pageToDisplay = i1043[79]
  i1042.m_margin = new pc.Vec4( i1043[80], i1043[81], i1043[82], i1043[83] )
  i1042.m_isUsingLegacyAnimationComponent = !!i1043[84]
  i1042.m_isVolumetricText = !!i1043[85]
  request.r(i1043[86], i1043[87], 0, i1042, 'm_Material')
  i1042.m_EmojiFallbackSupport = !!i1043[88]
  i1042.m_Maskable = !!i1043[89]
  i1042.m_Color = new pc.Color(i1043[90], i1043[91], i1043[92], i1043[93])
  i1042.m_RaycastTarget = !!i1043[94]
  i1042.m_RaycastPadding = new pc.Vec4( i1043[95], i1043[96], i1043[97], i1043[98] )
  return i1042
}

Deserializers["ItemConveyor"] = function (request, data, root) {
  var i1050 = root || request.c( 'ItemConveyor' )
  var i1051 = data
  i1050.isDraggingConveyor = !!i1051[0]
  request.r(i1051[1], i1051[2], 0, i1050, 'movingRoot')
  var i1053 = i1051[3]
  var i1052 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1053.length; i += 2) {
  request.r(i1053[i + 0], i1053[i + 1], 1, i1052, '')
  }
  i1050.itemSlots = i1052
  i1050.arrangeSlotsOnStart = !!i1051[4]
  i1050.leftLocalPoint = new pc.Vec3( i1051[5], i1051[6], i1051[7] )
  i1050.rightLocalPoint = new pc.Vec3( i1051[8], i1051[9], i1051[10] )
  i1050.sortSlotsLeftToRight = !!i1051[11]
  i1050.alignLeftMostSlotToScreenLeftOnStart = !!i1051[12]
  i1050.enableHorizontalDrag = !!i1051[13]
  i1050.conveyorLayer = UnityEngine.LayerMask.FromIntegerValue( i1051[14] )
  request.r(i1051[15], i1051[16], 0, i1050, 'raycastCamera')
  i1050.raycastDistance = i1051[17]
  i1050.leftEdgeViewportPadding = i1051[18]
  i1050.rightEdgeViewportPadding = i1051[19]
  i1050.slideBackSpeed = i1051[20]
  request.r(i1051[21], i1051[22], 0, i1050, 'sliderBackground')
  request.r(i1051[23], i1051[24], 0, i1050, 'sliderHandle')
  request.r(i1051[25], i1051[26], 0, i1050, 'sliderHandleRenderer')
  i1050.hideSliderInLandscape = !!i1051[27]
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1055 = data
  i1054.ambientIntensity = i1055[0]
  i1054.reflectionIntensity = i1055[1]
  i1054.ambientMode = i1055[2]
  i1054.ambientLight = new pc.Color(i1055[3], i1055[4], i1055[5], i1055[6])
  i1054.ambientSkyColor = new pc.Color(i1055[7], i1055[8], i1055[9], i1055[10])
  i1054.ambientGroundColor = new pc.Color(i1055[11], i1055[12], i1055[13], i1055[14])
  i1054.ambientEquatorColor = new pc.Color(i1055[15], i1055[16], i1055[17], i1055[18])
  i1054.fogColor = new pc.Color(i1055[19], i1055[20], i1055[21], i1055[22])
  i1054.fogEndDistance = i1055[23]
  i1054.fogStartDistance = i1055[24]
  i1054.fogDensity = i1055[25]
  i1054.fog = !!i1055[26]
  request.r(i1055[27], i1055[28], 0, i1054, 'skybox')
  i1054.fogMode = i1055[29]
  var i1057 = i1055[30]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1057[i + 0]) );
  }
  i1054.lightmaps = i1056
  i1054.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1055[31], i1054.lightProbes)
  i1054.lightmapsMode = i1055[32]
  i1054.mixedBakeMode = i1055[33]
  i1054.environmentLightingMode = i1055[34]
  i1054.ambientProbe = new pc.SphericalHarmonicsL2(i1055[35])
  i1054.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1055[36])
  i1054.useReferenceAmbientProbe = !!i1055[37]
  request.r(i1055[38], i1055[39], 0, i1054, 'customReflection')
  request.r(i1055[40], i1055[41], 0, i1054, 'defaultReflection')
  i1054.defaultReflectionMode = i1055[42]
  i1054.defaultReflectionResolution = i1055[43]
  i1054.sunLightObjectId = i1055[44]
  i1054.pixelLightCount = i1055[45]
  i1054.defaultReflectionHDR = !!i1055[46]
  i1054.hasLightDataAsset = !!i1055[47]
  i1054.hasManualGenerate = !!i1055[48]
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1061 = data
  request.r(i1061[0], i1061[1], 0, i1060, 'lightmapColor')
  request.r(i1061[2], i1061[3], 0, i1060, 'lightmapDirection')
  request.r(i1061[4], i1061[5], 0, i1060, 'shadowMask')
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1062 = root || new UnityEngine.LightProbes()
  var i1063 = data
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1071 = data
  var i1073 = i1071[0]
  var i1072 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1073[i + 0]));
  }
  i1070.ShaderCompilationErrors = i1072
  i1070.name = i1071[1]
  i1070.guid = i1071[2]
  var i1075 = i1071[3]
  var i1074 = []
  for(var i = 0; i < i1075.length; i += 1) {
    i1074.push( i1075[i + 0] );
  }
  i1070.shaderDefinedKeywords = i1074
  var i1077 = i1071[4]
  var i1076 = []
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1077[i + 0]) );
  }
  i1070.passes = i1076
  var i1079 = i1071[5]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1079[i + 0]) );
  }
  i1070.usePasses = i1078
  var i1081 = i1071[6]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1081[i + 0]) );
  }
  i1070.defaultParameterValues = i1080
  request.r(i1071[7], i1071[8], 0, i1070, 'unityFallbackShader')
  i1070.readDepth = !!i1071[9]
  i1070.hasDepthOnlyPass = !!i1071[10]
  i1070.isCreatedByShaderGraph = !!i1071[11]
  i1070.disableBatching = !!i1071[12]
  i1070.compiled = !!i1071[13]
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1085 = data
  i1084.shaderName = i1085[0]
  i1084.errorMessage = i1085[1]
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1088 = root || new pc.UnityShaderPass()
  var i1089 = data
  i1088.id = i1089[0]
  i1088.subShaderIndex = i1089[1]
  i1088.name = i1089[2]
  i1088.passType = i1089[3]
  i1088.grabPassTextureName = i1089[4]
  i1088.usePass = !!i1089[5]
  i1088.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1089[6], i1088.zTest)
  i1088.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1089[7], i1088.zWrite)
  i1088.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1089[8], i1088.culling)
  i1088.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1089[9], i1088.blending)
  i1088.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1089[10], i1088.alphaBlending)
  i1088.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1089[11], i1088.colorWriteMask)
  i1088.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1089[12], i1088.offsetUnits)
  i1088.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1089[13], i1088.offsetFactor)
  i1088.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1089[14], i1088.stencilRef)
  i1088.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1089[15], i1088.stencilReadMask)
  i1088.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1089[16], i1088.stencilWriteMask)
  i1088.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1089[17], i1088.stencilOp)
  i1088.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1089[18], i1088.stencilOpFront)
  i1088.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1089[19], i1088.stencilOpBack)
  var i1091 = i1089[20]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1091[i + 0]) );
  }
  i1088.tags = i1090
  var i1093 = i1089[21]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( i1093[i + 0] );
  }
  i1088.passDefinedKeywords = i1092
  var i1095 = i1089[22]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1095[i + 0]) );
  }
  i1088.passDefinedKeywordGroups = i1094
  var i1097 = i1089[23]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1097[i + 0]) );
  }
  i1088.variants = i1096
  var i1099 = i1089[24]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1099[i + 0]) );
  }
  i1088.excludedVariants = i1098
  i1088.hasDepthReader = !!i1089[25]
  return i1088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1101 = data
  i1100.val = i1101[0]
  i1100.name = i1101[1]
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1103 = data
  i1102.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1103[0], i1102.src)
  i1102.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1103[1], i1102.dst)
  i1102.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1103[2], i1102.op)
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1105 = data
  i1104.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1105[0], i1104.pass)
  i1104.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1105[1], i1104.fail)
  i1104.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1105[2], i1104.zFail)
  i1104.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1105[3], i1104.comp)
  return i1104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1109 = data
  i1108.name = i1109[0]
  i1108.value = i1109[1]
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1113 = data
  var i1115 = i1113[0]
  var i1114 = []
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.push( i1115[i + 0] );
  }
  i1112.keywords = i1114
  i1112.hasDiscard = !!i1113[1]
  return i1112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1119 = data
  i1118.passId = i1119[0]
  i1118.subShaderIndex = i1119[1]
  var i1121 = i1119[2]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.push( i1121[i + 0] );
  }
  i1118.keywords = i1120
  i1118.vertexProgram = i1119[3]
  i1118.fragmentProgram = i1119[4]
  i1118.exportedForWebGl2 = !!i1119[5]
  i1118.readDepth = !!i1119[6]
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1125 = data
  request.r(i1125[0], i1125[1], 0, i1124, 'shader')
  i1124.pass = i1125[2]
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1129 = data
  i1128.name = i1129[0]
  i1128.type = i1129[1]
  i1128.value = new pc.Vec4( i1129[2], i1129[3], i1129[4], i1129[5] )
  i1128.textureValue = i1129[6]
  i1128.shaderPropertyFlag = i1129[7]
  return i1128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1131 = data
  i1130.name = i1131[0]
  request.r(i1131[1], i1131[2], 0, i1130, 'texture')
  i1130.aabb = i1131[3]
  i1130.vertices = i1131[4]
  i1130.triangles = i1131[5]
  i1130.textureRect = UnityEngine.Rect.MinMaxRect(i1131[6], i1131[7], i1131[8], i1131[9])
  i1130.packedRect = UnityEngine.Rect.MinMaxRect(i1131[10], i1131[11], i1131[12], i1131[13])
  i1130.border = new pc.Vec4( i1131[14], i1131[15], i1131[16], i1131[17] )
  i1130.transparency = i1131[18]
  i1130.bounds = i1131[19]
  i1130.pixelsPerUnit = i1131[20]
  i1130.textureWidth = i1131[21]
  i1130.textureHeight = i1131[22]
  i1130.nativeSize = new pc.Vec2( i1131[23], i1131[24] )
  i1130.pivot = new pc.Vec2( i1131[25], i1131[26] )
  i1130.textureRectOffset = new pc.Vec2( i1131[27], i1131[28] )
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1133 = data
  i1132.name = i1133[0]
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1135 = data
  i1134.name = i1135[0]
  i1134.wrapMode = i1135[1]
  i1134.isLooping = !!i1135[2]
  i1134.length = i1135[3]
  var i1137 = i1135[4]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1137[i + 0]) );
  }
  i1134.curves = i1136
  var i1139 = i1135[5]
  var i1138 = []
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1139[i + 0]) );
  }
  i1134.events = i1138
  i1134.halfPrecision = !!i1135[6]
  i1134._frameRate = i1135[7]
  i1134.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1135[8], i1134.localBounds)
  i1134.hasMuscleCurves = !!i1135[9]
  var i1141 = i1135[10]
  var i1140 = []
  for(var i = 0; i < i1141.length; i += 1) {
    i1140.push( i1141[i + 0] );
  }
  i1134.clipMuscleConstant = i1140
  i1134.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1135[11], i1134.clipBindingConstant)
  return i1134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1145 = data
  i1144.path = i1145[0]
  i1144.hash = i1145[1]
  i1144.componentType = i1145[2]
  i1144.property = i1145[3]
  i1144.keys = i1145[4]
  var i1147 = i1145[5]
  var i1146 = []
  for(var i = 0; i < i1147.length; i += 1) {
    i1146.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1147[i + 0]) );
  }
  i1144.objectReferenceKeys = i1146
  return i1144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1151 = data
  i1150.time = i1151[0]
  request.r(i1151[1], i1151[2], 0, i1150, 'value')
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1155 = data
  i1154.functionName = i1155[0]
  i1154.floatParameter = i1155[1]
  i1154.intParameter = i1155[2]
  i1154.stringParameter = i1155[3]
  request.r(i1155[4], i1155[5], 0, i1154, 'objectReferenceParameter')
  i1154.time = i1155[6]
  return i1154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1157 = data
  i1156.center = new pc.Vec3( i1157[0], i1157[1], i1157[2] )
  i1156.extends = new pc.Vec3( i1157[3], i1157[4], i1157[5] )
  return i1156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1161 = data
  var i1163 = i1161[0]
  var i1162 = []
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.push( i1163[i + 0] );
  }
  i1160.genericBindings = i1162
  var i1165 = i1161[1]
  var i1164 = []
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.push( i1165[i + 0] );
  }
  i1160.pptrCurveMapping = i1164
  return i1160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1167 = data
  i1166.name = i1167[0]
  var i1169 = i1167[1]
  var i1168 = []
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1169[i + 0]) );
  }
  i1166.layers = i1168
  var i1171 = i1167[2]
  var i1170 = []
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1171[i + 0]) );
  }
  i1166.parameters = i1170
  i1166.animationClips = i1167[3]
  i1166.avatarUnsupported = i1167[4]
  return i1166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1175 = data
  i1174.name = i1175[0]
  i1174.defaultWeight = i1175[1]
  i1174.blendingMode = i1175[2]
  i1174.avatarMask = i1175[3]
  i1174.syncedLayerIndex = i1175[4]
  i1174.syncedLayerAffectsTiming = !!i1175[5]
  i1174.syncedLayers = i1175[6]
  i1174.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1175[7], i1174.stateMachine)
  return i1174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1177 = data
  i1176.id = i1177[0]
  i1176.name = i1177[1]
  i1176.path = i1177[2]
  var i1179 = i1177[3]
  var i1178 = []
  for(var i = 0; i < i1179.length; i += 1) {
    i1178.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1179[i + 0]) );
  }
  i1176.states = i1178
  var i1181 = i1177[4]
  var i1180 = []
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1181[i + 0]) );
  }
  i1176.machines = i1180
  var i1183 = i1177[5]
  var i1182 = []
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1183[i + 0]) );
  }
  i1176.entryStateTransitions = i1182
  var i1185 = i1177[6]
  var i1184 = []
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1185[i + 0]) );
  }
  i1176.exitStateTransitions = i1184
  var i1187 = i1177[7]
  var i1186 = []
  for(var i = 0; i < i1187.length; i += 1) {
    i1186.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1187[i + 0]) );
  }
  i1176.anyStateTransitions = i1186
  i1176.defaultStateId = i1177[8]
  return i1176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1191 = data
  i1190.id = i1191[0]
  i1190.name = i1191[1]
  i1190.cycleOffset = i1191[2]
  i1190.cycleOffsetParameter = i1191[3]
  i1190.cycleOffsetParameterActive = !!i1191[4]
  i1190.mirror = !!i1191[5]
  i1190.mirrorParameter = i1191[6]
  i1190.mirrorParameterActive = !!i1191[7]
  i1190.motionId = i1191[8]
  i1190.nameHash = i1191[9]
  i1190.fullPathHash = i1191[10]
  i1190.speed = i1191[11]
  i1190.speedParameter = i1191[12]
  i1190.speedParameterActive = !!i1191[13]
  i1190.tag = i1191[14]
  i1190.tagHash = i1191[15]
  i1190.writeDefaultValues = !!i1191[16]
  var i1193 = i1191[17]
  var i1192 = []
  for(var i = 0; i < i1193.length; i += 2) {
  request.r(i1193[i + 0], i1193[i + 1], 2, i1192, '')
  }
  i1190.behaviours = i1192
  var i1195 = i1191[18]
  var i1194 = []
  for(var i = 0; i < i1195.length; i += 1) {
    i1194.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1195[i + 0]) );
  }
  i1190.transitions = i1194
  return i1190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1201 = data
  i1200.fullPath = i1201[0]
  i1200.canTransitionToSelf = !!i1201[1]
  i1200.duration = i1201[2]
  i1200.exitTime = i1201[3]
  i1200.hasExitTime = !!i1201[4]
  i1200.hasFixedDuration = !!i1201[5]
  i1200.interruptionSource = i1201[6]
  i1200.offset = i1201[7]
  i1200.orderedInterruption = !!i1201[8]
  i1200.destinationStateId = i1201[9]
  i1200.isExit = !!i1201[10]
  i1200.mute = !!i1201[11]
  i1200.solo = !!i1201[12]
  var i1203 = i1201[13]
  var i1202 = []
  for(var i = 0; i < i1203.length; i += 1) {
    i1202.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1203[i + 0]) );
  }
  i1200.conditions = i1202
  return i1200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1209 = data
  i1208.destinationStateId = i1209[0]
  i1208.isExit = !!i1209[1]
  i1208.mute = !!i1209[2]
  i1208.solo = !!i1209[3]
  var i1211 = i1209[4]
  var i1210 = []
  for(var i = 0; i < i1211.length; i += 1) {
    i1210.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1211[i + 0]) );
  }
  i1208.conditions = i1210
  return i1208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1215 = data
  i1214.defaultBool = !!i1215[0]
  i1214.defaultFloat = i1215[1]
  i1214.defaultInt = i1215[2]
  i1214.name = i1215[3]
  i1214.nameHash = i1215[4]
  i1214.type = i1215[5]
  return i1214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1217 = data
  i1216.name = i1217[0]
  i1216.bytes64 = i1217[1]
  i1216.data = i1217[2]
  return i1216
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1218 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1219 = data
  i1218.normalStyle = i1219[0]
  i1218.normalSpacingOffset = i1219[1]
  i1218.boldStyle = i1219[2]
  i1218.boldSpacing = i1219[3]
  i1218.italicStyle = i1219[4]
  i1218.tabSize = i1219[5]
  request.r(i1219[6], i1219[7], 0, i1218, 'atlas')
  i1218.m_SourceFontFileGUID = i1219[8]
  i1218.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1219[9], i1218.m_CreationSettings)
  request.r(i1219[10], i1219[11], 0, i1218, 'm_SourceFontFile')
  i1218.m_SourceFontFilePath = i1219[12]
  i1218.m_AtlasPopulationMode = i1219[13]
  i1218.InternalDynamicOS = !!i1219[14]
  var i1221 = i1219[15]
  var i1220 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1221.length; i += 1) {
    i1220.add(request.d('UnityEngine.TextCore.Glyph', i1221[i + 0]));
  }
  i1218.m_GlyphTable = i1220
  var i1223 = i1219[16]
  var i1222 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1223.length; i += 1) {
    i1222.add(request.d('TMPro.TMP_Character', i1223[i + 0]));
  }
  i1218.m_CharacterTable = i1222
  var i1225 = i1219[17]
  var i1224 = []
  for(var i = 0; i < i1225.length; i += 2) {
  request.r(i1225[i + 0], i1225[i + 1], 2, i1224, '')
  }
  i1218.m_AtlasTextures = i1224
  i1218.m_AtlasTextureIndex = i1219[18]
  i1218.m_IsMultiAtlasTexturesEnabled = !!i1219[19]
  i1218.m_GetFontFeatures = !!i1219[20]
  i1218.m_ClearDynamicDataOnBuild = !!i1219[21]
  i1218.m_AtlasWidth = i1219[22]
  i1218.m_AtlasHeight = i1219[23]
  i1218.m_AtlasPadding = i1219[24]
  i1218.m_AtlasRenderMode = i1219[25]
  var i1227 = i1219[26]
  var i1226 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1227.length; i += 1) {
    i1226.add(request.d('UnityEngine.TextCore.GlyphRect', i1227[i + 0]));
  }
  i1218.m_UsedGlyphRects = i1226
  var i1229 = i1219[27]
  var i1228 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1229.length; i += 1) {
    i1228.add(request.d('UnityEngine.TextCore.GlyphRect', i1229[i + 0]));
  }
  i1218.m_FreeGlyphRects = i1228
  i1218.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1219[28], i1218.m_FontFeatureTable)
  i1218.m_ShouldReimportFontFeatures = !!i1219[29]
  var i1231 = i1219[30]
  var i1230 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1231.length; i += 2) {
  request.r(i1231[i + 0], i1231[i + 1], 1, i1230, '')
  }
  i1218.m_FallbackFontAssetTable = i1230
  var i1233 = i1219[31]
  var i1232 = []
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.push( request.d('TMPro.TMP_FontWeightPair', i1233[i + 0]) );
  }
  i1218.m_FontWeightTable = i1232
  var i1235 = i1219[32]
  var i1234 = []
  for(var i = 0; i < i1235.length; i += 1) {
    i1234.push( request.d('TMPro.TMP_FontWeightPair', i1235[i + 0]) );
  }
  i1218.fontWeights = i1234
  i1218.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1219[33], i1218.m_fontInfo)
  var i1237 = i1219[34]
  var i1236 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1237.length; i += 1) {
    i1236.add(request.d('TMPro.TMP_Glyph', i1237[i + 0]));
  }
  i1218.m_glyphInfoList = i1236
  i1218.m_KerningTable = request.d('TMPro.KerningTable', i1219[35], i1218.m_KerningTable)
  var i1239 = i1219[36]
  var i1238 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1239.length; i += 2) {
  request.r(i1239[i + 0], i1239[i + 1], 1, i1238, '')
  }
  i1218.fallbackFontAssets = i1238
  i1218.m_Version = i1219[37]
  i1218.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1219[38], i1218.m_FaceInfo)
  request.r(i1219[39], i1219[40], 0, i1218, 'm_Material')
  return i1218
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1240 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1241 = data
  i1240.sourceFontFileName = i1241[0]
  i1240.sourceFontFileGUID = i1241[1]
  i1240.faceIndex = i1241[2]
  i1240.pointSizeSamplingMode = i1241[3]
  i1240.pointSize = i1241[4]
  i1240.padding = i1241[5]
  i1240.paddingMode = i1241[6]
  i1240.packingMode = i1241[7]
  i1240.atlasWidth = i1241[8]
  i1240.atlasHeight = i1241[9]
  i1240.characterSetSelectionMode = i1241[10]
  i1240.characterSequence = i1241[11]
  i1240.referencedFontAssetGUID = i1241[12]
  i1240.referencedTextAssetGUID = i1241[13]
  i1240.fontStyle = i1241[14]
  i1240.fontStyleModifier = i1241[15]
  i1240.renderMode = i1241[16]
  i1240.includeFontFeatures = !!i1241[17]
  return i1240
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1244 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1245 = data
  i1244.m_Index = i1245[0]
  i1244.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1245[1], i1244.m_Metrics)
  i1244.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1245[2], i1244.m_GlyphRect)
  i1244.m_Scale = i1245[3]
  i1244.m_AtlasIndex = i1245[4]
  i1244.m_ClassDefinitionType = i1245[5]
  return i1244
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1246 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1247 = data
  i1246.m_Width = i1247[0]
  i1246.m_Height = i1247[1]
  i1246.m_HorizontalBearingX = i1247[2]
  i1246.m_HorizontalBearingY = i1247[3]
  i1246.m_HorizontalAdvance = i1247[4]
  return i1246
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1248 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1249 = data
  i1248.m_X = i1249[0]
  i1248.m_Y = i1249[1]
  i1248.m_Width = i1249[2]
  i1248.m_Height = i1249[3]
  return i1248
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1252 = root || request.c( 'TMPro.TMP_Character' )
  var i1253 = data
  i1252.m_ElementType = i1253[0]
  i1252.m_Unicode = i1253[1]
  i1252.m_GlyphIndex = i1253[2]
  i1252.m_Scale = i1253[3]
  return i1252
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1258 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1259 = data
  var i1261 = i1259[0]
  var i1260 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1261.length; i += 1) {
    i1260.add(request.d('TMPro.MultipleSubstitutionRecord', i1261[i + 0]));
  }
  i1258.m_MultipleSubstitutionRecords = i1260
  var i1263 = i1259[1]
  var i1262 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1263.length; i += 1) {
    i1262.add(request.d('TMPro.LigatureSubstitutionRecord', i1263[i + 0]));
  }
  i1258.m_LigatureSubstitutionRecords = i1262
  var i1265 = i1259[2]
  var i1264 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1265.length; i += 1) {
    i1264.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1265[i + 0]));
  }
  i1258.m_GlyphPairAdjustmentRecords = i1264
  var i1267 = i1259[3]
  var i1266 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1267.length; i += 1) {
    i1266.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1267[i + 0]));
  }
  i1258.m_MarkToBaseAdjustmentRecords = i1266
  var i1269 = i1259[4]
  var i1268 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1269.length; i += 1) {
    i1268.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1269[i + 0]));
  }
  i1258.m_MarkToMarkAdjustmentRecords = i1268
  return i1258
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1272 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1273 = data
  i1272.m_TargetGlyphID = i1273[0]
  i1272.m_SubstituteGlyphIDs = i1273[1]
  return i1272
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1276 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1277 = data
  i1276.m_ComponentGlyphIDs = i1277[0]
  i1276.m_LigatureGlyphID = i1277[1]
  return i1276
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1280 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1281 = data
  i1280.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1281[0], i1280.m_FirstAdjustmentRecord)
  i1280.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1281[1], i1280.m_SecondAdjustmentRecord)
  i1280.m_FeatureLookupFlags = i1281[2]
  return i1280
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1284 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1285 = data
  i1284.m_BaseGlyphID = i1285[0]
  i1284.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1285[1], i1284.m_BaseGlyphAnchorPoint)
  i1284.m_MarkGlyphID = i1285[2]
  i1284.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1285[3], i1284.m_MarkPositionAdjustment)
  return i1284
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1288 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1289 = data
  i1288.m_BaseMarkGlyphID = i1289[0]
  i1288.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1289[1], i1288.m_BaseMarkGlyphAnchorPoint)
  i1288.m_CombiningMarkGlyphID = i1289[2]
  i1288.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1289[3], i1288.m_CombiningMarkPositionAdjustment)
  return i1288
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1294 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1295 = data
  request.r(i1295[0], i1295[1], 0, i1294, 'regularTypeface')
  request.r(i1295[2], i1295[3], 0, i1294, 'italicTypeface')
  return i1294
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1296 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1297 = data
  i1296.Name = i1297[0]
  i1296.PointSize = i1297[1]
  i1296.Scale = i1297[2]
  i1296.CharacterCount = i1297[3]
  i1296.LineHeight = i1297[4]
  i1296.Baseline = i1297[5]
  i1296.Ascender = i1297[6]
  i1296.CapHeight = i1297[7]
  i1296.Descender = i1297[8]
  i1296.CenterLine = i1297[9]
  i1296.SuperscriptOffset = i1297[10]
  i1296.SubscriptOffset = i1297[11]
  i1296.SubSize = i1297[12]
  i1296.Underline = i1297[13]
  i1296.UnderlineThickness = i1297[14]
  i1296.strikethrough = i1297[15]
  i1296.strikethroughThickness = i1297[16]
  i1296.TabWidth = i1297[17]
  i1296.Padding = i1297[18]
  i1296.AtlasWidth = i1297[19]
  i1296.AtlasHeight = i1297[20]
  return i1296
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1300 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1301 = data
  i1300.id = i1301[0]
  i1300.x = i1301[1]
  i1300.y = i1301[2]
  i1300.width = i1301[3]
  i1300.height = i1301[4]
  i1300.xOffset = i1301[5]
  i1300.yOffset = i1301[6]
  i1300.xAdvance = i1301[7]
  i1300.scale = i1301[8]
  return i1300
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1302 = root || request.c( 'TMPro.KerningTable' )
  var i1303 = data
  var i1305 = i1303[0]
  var i1304 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1305.length; i += 1) {
    i1304.add(request.d('TMPro.KerningPair', i1305[i + 0]));
  }
  i1302.kerningPairs = i1304
  return i1302
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1308 = root || request.c( 'TMPro.KerningPair' )
  var i1309 = data
  i1308.xOffset = i1309[0]
  i1308.m_FirstGlyph = i1309[1]
  i1308.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1309[2], i1308.m_FirstGlyphAdjustments)
  i1308.m_SecondGlyph = i1309[3]
  i1308.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1309[4], i1308.m_SecondGlyphAdjustments)
  i1308.m_IgnoreSpacingAdjustments = !!i1309[5]
  return i1308
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1310 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1311 = data
  i1310.m_FaceIndex = i1311[0]
  i1310.m_FamilyName = i1311[1]
  i1310.m_StyleName = i1311[2]
  i1310.m_PointSize = i1311[3]
  i1310.m_Scale = i1311[4]
  i1310.m_UnitsPerEM = i1311[5]
  i1310.m_LineHeight = i1311[6]
  i1310.m_AscentLine = i1311[7]
  i1310.m_CapLine = i1311[8]
  i1310.m_MeanLine = i1311[9]
  i1310.m_Baseline = i1311[10]
  i1310.m_DescentLine = i1311[11]
  i1310.m_SuperscriptOffset = i1311[12]
  i1310.m_SuperscriptSize = i1311[13]
  i1310.m_SubscriptOffset = i1311[14]
  i1310.m_SubscriptSize = i1311[15]
  i1310.m_UnderlineOffset = i1311[16]
  i1310.m_UnderlineThickness = i1311[17]
  i1310.m_StrikethroughOffset = i1311[18]
  i1310.m_StrikethroughThickness = i1311[19]
  i1310.m_TabWidth = i1311[20]
  return i1310
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1312 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1313 = data
  var i1315 = i1313[0]
  var i1314 = []
  for(var i = 0; i < i1315.length; i += 2) {
  request.r(i1315[i + 0], i1315[i + 1], 2, i1314, '')
  }
  i1312.atlasAssets = i1314
  i1312.scale = i1313[1]
  request.r(i1313[2], i1313[3], 0, i1312, 'skeletonJSON')
  i1312.isUpgradingBlendModeMaterials = !!i1313[4]
  i1312.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1313[5], i1312.blendModeMaterials)
  var i1317 = i1313[6]
  var i1316 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1317.length; i += 2) {
  request.r(i1317[i + 0], i1317[i + 1], 1, i1316, '')
  }
  i1312.skeletonDataModifiers = i1316
  var i1319 = i1313[7]
  var i1318 = []
  for(var i = 0; i < i1319.length; i += 1) {
    i1318.push( i1319[i + 0] );
  }
  i1312.fromAnimation = i1318
  var i1321 = i1313[8]
  var i1320 = []
  for(var i = 0; i < i1321.length; i += 1) {
    i1320.push( i1321[i + 0] );
  }
  i1312.toAnimation = i1320
  i1312.duration = i1313[9]
  i1312.defaultMix = i1313[10]
  request.r(i1313[11], i1313[12], 0, i1312, 'controller')
  return i1312
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1324 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1325 = data
  i1324.applyAdditiveMaterial = !!i1325[0]
  var i1327 = i1325[1]
  var i1326 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1327.length; i += 1) {
    i1326.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1327[i + 0]));
  }
  i1324.additiveMaterials = i1326
  var i1329 = i1325[2]
  var i1328 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1329.length; i += 1) {
    i1328.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1329[i + 0]));
  }
  i1324.multiplyMaterials = i1328
  var i1331 = i1325[3]
  var i1330 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1331.length; i += 1) {
    i1330.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1331[i + 0]));
  }
  i1324.screenMaterials = i1330
  i1324.requiresBlendModeMaterials = !!i1325[4]
  return i1324
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1334 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1335 = data
  i1334.pageName = i1335[0]
  request.r(i1335[1], i1335[2], 0, i1334, 'material')
  return i1334
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1338 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1339 = data
  request.r(i1339[0], i1339[1], 0, i1338, 'atlasFile')
  var i1341 = i1339[2]
  var i1340 = []
  for(var i = 0; i < i1341.length; i += 2) {
  request.r(i1341[i + 0], i1341[i + 1], 2, i1340, '')
  }
  i1338.materials = i1340
  return i1338
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1342 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1343 = data
  i1342.useSafeMode = !!i1343[0]
  i1342.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1343[1], i1342.safeModeOptions)
  i1342.timeScale = i1343[2]
  i1342.unscaledTimeScale = i1343[3]
  i1342.useSmoothDeltaTime = !!i1343[4]
  i1342.maxSmoothUnscaledTime = i1343[5]
  i1342.rewindCallbackMode = i1343[6]
  i1342.showUnityEditorReport = !!i1343[7]
  i1342.logBehaviour = i1343[8]
  i1342.drawGizmos = !!i1343[9]
  i1342.defaultRecyclable = !!i1343[10]
  i1342.defaultAutoPlay = i1343[11]
  i1342.defaultUpdateType = i1343[12]
  i1342.defaultTimeScaleIndependent = !!i1343[13]
  i1342.defaultEaseType = i1343[14]
  i1342.defaultEaseOvershootOrAmplitude = i1343[15]
  i1342.defaultEasePeriod = i1343[16]
  i1342.defaultAutoKill = !!i1343[17]
  i1342.defaultLoopType = i1343[18]
  i1342.debugMode = !!i1343[19]
  i1342.debugStoreTargetId = !!i1343[20]
  i1342.showPreviewPanel = !!i1343[21]
  i1342.storeSettingsLocation = i1343[22]
  i1342.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1343[23], i1342.modules)
  i1342.createASMDEF = !!i1343[24]
  i1342.showPlayingTweens = !!i1343[25]
  i1342.showPausedTweens = !!i1343[26]
  return i1342
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1344 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1345 = data
  i1344.logBehaviour = i1345[0]
  i1344.nestedTweenFailureBehaviour = i1345[1]
  return i1344
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1346 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1347 = data
  i1346.showPanel = !!i1347[0]
  i1346.audioEnabled = !!i1347[1]
  i1346.physicsEnabled = !!i1347[2]
  i1346.physics2DEnabled = !!i1347[3]
  i1346.spriteEnabled = !!i1347[4]
  i1346.uiEnabled = !!i1347[5]
  i1346.uiToolkitEnabled = !!i1347[6]
  i1346.textMeshProEnabled = !!i1347[7]
  i1346.tk2DEnabled = !!i1347[8]
  i1346.deAudioEnabled = !!i1347[9]
  i1346.deUnityExtendedEnabled = !!i1347[10]
  i1346.epoOutlineEnabled = !!i1347[11]
  return i1346
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1348 = root || request.c( 'TMPro.TMP_Settings' )
  var i1349 = data
  i1348.assetVersion = i1349[0]
  i1348.m_TextWrappingMode = i1349[1]
  i1348.m_enableKerning = !!i1349[2]
  var i1351 = i1349[3]
  var i1350 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1351.length; i += 1) {
    i1350.add(i1351[i + 0]);
  }
  i1348.m_ActiveFontFeatures = i1350
  i1348.m_enableExtraPadding = !!i1349[4]
  i1348.m_enableTintAllSprites = !!i1349[5]
  i1348.m_enableParseEscapeCharacters = !!i1349[6]
  i1348.m_EnableRaycastTarget = !!i1349[7]
  i1348.m_GetFontFeaturesAtRuntime = !!i1349[8]
  i1348.m_missingGlyphCharacter = i1349[9]
  i1348.m_ClearDynamicDataOnBuild = !!i1349[10]
  i1348.m_warningsDisabled = !!i1349[11]
  request.r(i1349[12], i1349[13], 0, i1348, 'm_defaultFontAsset')
  i1348.m_defaultFontAssetPath = i1349[14]
  i1348.m_defaultFontSize = i1349[15]
  i1348.m_defaultAutoSizeMinRatio = i1349[16]
  i1348.m_defaultAutoSizeMaxRatio = i1349[17]
  i1348.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1349[18], i1349[19] )
  i1348.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1349[20], i1349[21] )
  i1348.m_autoSizeTextContainer = !!i1349[22]
  i1348.m_IsTextObjectScaleStatic = !!i1349[23]
  var i1353 = i1349[24]
  var i1352 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1353.length; i += 2) {
  request.r(i1353[i + 0], i1353[i + 1], 1, i1352, '')
  }
  i1348.m_fallbackFontAssets = i1352
  i1348.m_matchMaterialPreset = !!i1349[25]
  i1348.m_HideSubTextObjects = !!i1349[26]
  request.r(i1349[27], i1349[28], 0, i1348, 'm_defaultSpriteAsset')
  i1348.m_defaultSpriteAssetPath = i1349[29]
  i1348.m_enableEmojiSupport = !!i1349[30]
  i1348.m_MissingCharacterSpriteUnicode = i1349[31]
  var i1355 = i1349[32]
  var i1354 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1355.length; i += 2) {
  request.r(i1355[i + 0], i1355[i + 1], 1, i1354, '')
  }
  i1348.m_EmojiFallbackTextAssets = i1354
  i1348.m_defaultColorGradientPresetsPath = i1349[33]
  request.r(i1349[34], i1349[35], 0, i1348, 'm_defaultStyleSheet')
  i1348.m_StyleSheetsResourcePath = i1349[36]
  request.r(i1349[37], i1349[38], 0, i1348, 'm_leadingCharacters')
  request.r(i1349[39], i1349[40], 0, i1348, 'm_followingCharacters')
  i1348.m_UseModernHangulLineBreakingRules = !!i1349[41]
  return i1348
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1358 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1359 = data
  request.r(i1359[0], i1359[1], 0, i1358, 'spriteSheet')
  var i1361 = i1359[2]
  var i1360 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1361.length; i += 1) {
    i1360.add(request.d('TMPro.TMP_Sprite', i1361[i + 0]));
  }
  i1358.spriteInfoList = i1360
  var i1363 = i1359[3]
  var i1362 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1363.length; i += 2) {
  request.r(i1363[i + 0], i1363[i + 1], 1, i1362, '')
  }
  i1358.fallbackSpriteAssets = i1362
  var i1365 = i1359[4]
  var i1364 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1365.length; i += 1) {
    i1364.add(request.d('TMPro.TMP_SpriteCharacter', i1365[i + 0]));
  }
  i1358.m_SpriteCharacterTable = i1364
  var i1367 = i1359[5]
  var i1366 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1367.length; i += 1) {
    i1366.add(request.d('TMPro.TMP_SpriteGlyph', i1367[i + 0]));
  }
  i1358.m_GlyphTable = i1366
  i1358.m_Version = i1359[6]
  i1358.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1359[7], i1358.m_FaceInfo)
  request.r(i1359[8], i1359[9], 0, i1358, 'm_Material')
  return i1358
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1370 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1371 = data
  i1370.name = i1371[0]
  i1370.hashCode = i1371[1]
  i1370.unicode = i1371[2]
  i1370.pivot = new pc.Vec2( i1371[3], i1371[4] )
  request.r(i1371[5], i1371[6], 0, i1370, 'sprite')
  i1370.id = i1371[7]
  i1370.x = i1371[8]
  i1370.y = i1371[9]
  i1370.width = i1371[10]
  i1370.height = i1371[11]
  i1370.xOffset = i1371[12]
  i1370.yOffset = i1371[13]
  i1370.xAdvance = i1371[14]
  i1370.scale = i1371[15]
  return i1370
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1376 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1377 = data
  i1376.m_Name = i1377[0]
  i1376.m_ElementType = i1377[1]
  i1376.m_Unicode = i1377[2]
  i1376.m_GlyphIndex = i1377[3]
  i1376.m_Scale = i1377[4]
  return i1376
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1380 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1381 = data
  request.r(i1381[0], i1381[1], 0, i1380, 'sprite')
  i1380.m_Index = i1381[2]
  i1380.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1381[3], i1380.m_Metrics)
  i1380.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1381[4], i1380.m_GlyphRect)
  i1380.m_Scale = i1381[5]
  i1380.m_AtlasIndex = i1381[6]
  i1380.m_ClassDefinitionType = i1381[7]
  return i1380
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1382 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1383 = data
  var i1385 = i1383[0]
  var i1384 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1385.length; i += 1) {
    i1384.add(request.d('TMPro.TMP_Style', i1385[i + 0]));
  }
  i1382.m_StyleList = i1384
  return i1382
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1388 = root || request.c( 'TMPro.TMP_Style' )
  var i1389 = data
  i1388.m_Name = i1389[0]
  i1388.m_HashCode = i1389[1]
  i1388.m_OpeningDefinition = i1389[2]
  i1388.m_ClosingDefinition = i1389[3]
  i1388.m_OpeningTagArray = i1389[4]
  i1388.m_ClosingTagArray = i1389[5]
  return i1388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1391 = data
  var i1393 = i1391[0]
  var i1392 = []
  for(var i = 0; i < i1393.length; i += 1) {
    i1392.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1393[i + 0]) );
  }
  i1390.files = i1392
  i1390.componentToPrefabIds = i1391[1]
  return i1390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1397 = data
  i1396.path = i1397[0]
  request.r(i1397[1], i1397[2], 0, i1396, 'unityObject')
  return i1396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1399 = data
  var i1401 = i1399[0]
  var i1400 = []
  for(var i = 0; i < i1401.length; i += 1) {
    i1400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1401[i + 0]) );
  }
  i1398.scriptsExecutionOrder = i1400
  var i1403 = i1399[1]
  var i1402 = []
  for(var i = 0; i < i1403.length; i += 1) {
    i1402.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1403[i + 0]) );
  }
  i1398.sortingLayers = i1402
  var i1405 = i1399[2]
  var i1404 = []
  for(var i = 0; i < i1405.length; i += 1) {
    i1404.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1405[i + 0]) );
  }
  i1398.cullingLayers = i1404
  i1398.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1399[3], i1398.timeSettings)
  i1398.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1399[4], i1398.physicsSettings)
  i1398.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1399[5], i1398.physics2DSettings)
  i1398.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1399[6], i1398.qualitySettings)
  i1398.enableRealtimeShadows = !!i1399[7]
  i1398.enableAutoInstancing = !!i1399[8]
  i1398.enableStaticBatching = !!i1399[9]
  i1398.enableDynamicBatching = !!i1399[10]
  i1398.lightmapEncodingQuality = i1399[11]
  i1398.desiredColorSpace = i1399[12]
  var i1407 = i1399[13]
  var i1406 = []
  for(var i = 0; i < i1407.length; i += 1) {
    i1406.push( i1407[i + 0] );
  }
  i1398.allTags = i1406
  return i1398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1411 = data
  i1410.name = i1411[0]
  i1410.value = i1411[1]
  return i1410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1415 = data
  i1414.id = i1415[0]
  i1414.name = i1415[1]
  i1414.value = i1415[2]
  return i1414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1419 = data
  i1418.id = i1419[0]
  i1418.name = i1419[1]
  return i1418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1421 = data
  i1420.fixedDeltaTime = i1421[0]
  i1420.maximumDeltaTime = i1421[1]
  i1420.timeScale = i1421[2]
  i1420.maximumParticleTimestep = i1421[3]
  return i1420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1423 = data
  i1422.gravity = new pc.Vec3( i1423[0], i1423[1], i1423[2] )
  i1422.defaultSolverIterations = i1423[3]
  i1422.bounceThreshold = i1423[4]
  i1422.autoSyncTransforms = !!i1423[5]
  i1422.autoSimulation = !!i1423[6]
  var i1425 = i1423[7]
  var i1424 = []
  for(var i = 0; i < i1425.length; i += 1) {
    i1424.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1425[i + 0]) );
  }
  i1422.collisionMatrix = i1424
  return i1422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1429 = data
  i1428.enabled = !!i1429[0]
  i1428.layerId = i1429[1]
  i1428.otherLayerId = i1429[2]
  return i1428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1431 = data
  request.r(i1431[0], i1431[1], 0, i1430, 'material')
  i1430.gravity = new pc.Vec2( i1431[2], i1431[3] )
  i1430.positionIterations = i1431[4]
  i1430.velocityIterations = i1431[5]
  i1430.velocityThreshold = i1431[6]
  i1430.maxLinearCorrection = i1431[7]
  i1430.maxAngularCorrection = i1431[8]
  i1430.maxTranslationSpeed = i1431[9]
  i1430.maxRotationSpeed = i1431[10]
  i1430.baumgarteScale = i1431[11]
  i1430.baumgarteTOIScale = i1431[12]
  i1430.timeToSleep = i1431[13]
  i1430.linearSleepTolerance = i1431[14]
  i1430.angularSleepTolerance = i1431[15]
  i1430.defaultContactOffset = i1431[16]
  i1430.autoSimulation = !!i1431[17]
  i1430.queriesHitTriggers = !!i1431[18]
  i1430.queriesStartInColliders = !!i1431[19]
  i1430.callbacksOnDisable = !!i1431[20]
  i1430.reuseCollisionCallbacks = !!i1431[21]
  i1430.autoSyncTransforms = !!i1431[22]
  var i1433 = i1431[23]
  var i1432 = []
  for(var i = 0; i < i1433.length; i += 1) {
    i1432.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1433[i + 0]) );
  }
  i1430.collisionMatrix = i1432
  return i1430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1437 = data
  i1436.enabled = !!i1437[0]
  i1436.layerId = i1437[1]
  i1436.otherLayerId = i1437[2]
  return i1436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1439 = data
  var i1441 = i1439[0]
  var i1440 = []
  for(var i = 0; i < i1441.length; i += 1) {
    i1440.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1441[i + 0]) );
  }
  i1438.qualityLevels = i1440
  var i1443 = i1439[1]
  var i1442 = []
  for(var i = 0; i < i1443.length; i += 1) {
    i1442.push( i1443[i + 0] );
  }
  i1438.names = i1442
  i1438.shadows = i1439[2]
  i1438.anisotropicFiltering = i1439[3]
  i1438.antiAliasing = i1439[4]
  i1438.lodBias = i1439[5]
  i1438.shadowCascades = i1439[6]
  i1438.shadowDistance = i1439[7]
  i1438.shadowmaskMode = i1439[8]
  i1438.shadowProjection = i1439[9]
  i1438.shadowResolution = i1439[10]
  i1438.softParticles = !!i1439[11]
  i1438.softVegetation = !!i1439[12]
  i1438.activeColorSpace = i1439[13]
  i1438.desiredColorSpace = i1439[14]
  i1438.masterTextureLimit = i1439[15]
  i1438.maxQueuedFrames = i1439[16]
  i1438.particleRaycastBudget = i1439[17]
  i1438.pixelLightCount = i1439[18]
  i1438.realtimeReflectionProbes = !!i1439[19]
  i1438.shadowCascade2Split = i1439[20]
  i1438.shadowCascade4Split = new pc.Vec3( i1439[21], i1439[22], i1439[23] )
  i1438.streamingMipmapsActive = !!i1439[24]
  i1438.vSyncCount = i1439[25]
  i1438.asyncUploadBufferSize = i1439[26]
  i1438.asyncUploadTimeSlice = i1439[27]
  i1438.billboardsFaceCameraPosition = !!i1439[28]
  i1438.shadowNearPlaneOffset = i1439[29]
  i1438.streamingMipmapsMemoryBudget = i1439[30]
  i1438.maximumLODLevel = i1439[31]
  i1438.streamingMipmapsAddAllCameras = !!i1439[32]
  i1438.streamingMipmapsMaxLevelReduction = i1439[33]
  i1438.streamingMipmapsRenderersPerFrame = i1439[34]
  i1438.resolutionScalingFixedDPIFactor = i1439[35]
  i1438.streamingMipmapsMaxFileIORequests = i1439[36]
  i1438.currentQualityLevel = i1439[37]
  return i1438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1449 = data
  i1448.weight = i1449[0]
  i1448.vertices = i1449[1]
  i1448.normals = i1449[2]
  i1448.tangents = i1449[3]
  return i1448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1453 = data
  i1452.mode = i1453[0]
  i1452.parameter = i1453[1]
  i1452.threshold = i1453[2]
  return i1452
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1454 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1455 = data
  i1454.m_GlyphIndex = i1455[0]
  i1454.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1455[1], i1454.m_GlyphValueRecord)
  return i1454
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1456 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1457 = data
  i1456.m_XCoordinate = i1457[0]
  i1456.m_YCoordinate = i1457[1]
  return i1456
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1458 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1459 = data
  i1458.m_XPositionAdjustment = i1459[0]
  i1458.m_YPositionAdjustment = i1459[1]
  return i1458
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1460 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1461 = data
  i1460.xPlacement = i1461[0]
  i1460.yPlacement = i1461[1]
  i1460.xAdvance = i1461[2]
  i1460.yAdvance = i1461[3]
  return i1460
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1462 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1463 = data
  i1462.m_XPlacement = i1463[0]
  i1462.m_YPlacement = i1463[1]
  i1462.m_XAdvance = i1463[2]
  i1462.m_YAdvance = i1463[3]
  return i1462
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"enabled":21},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"60":[61],"62":[61],"63":[61],"64":[61],"65":[61],"66":[61],"67":[68],"69":[34],"70":[71],"72":[71],"73":[71],"74":[71],"75":[71],"76":[71],"77":[78],"79":[78],"80":[78],"81":[78],"82":[78],"83":[78],"84":[78],"85":[78],"86":[78],"87":[78],"88":[78],"89":[78],"90":[78],"91":[34],"92":[47],"93":[94],"95":[94],"11":[10],"96":[97],"98":[99],"100":[47,46],"101":[99],"102":[101],"103":[99],"104":[99],"105":[106],"107":[106],"108":[99],"109":[10],"110":[17,10],"45":[47],"111":[17,10],"112":[15,47],"99":[47],"113":[47,46],"114":[71],"115":[78],"116":[117],"118":[106],"119":[41],"120":[34],"121":[122],"123":[39],"124":[11],"125":[10],"53":[47,10],"18":[10,17],"126":[10],"127":[17,10],"128":[47],"129":[17,10],"130":[10],"131":[132],"133":[132],"134":[132],"135":[10],"136":[10],"14":[11],"21":[17,10],"137":[10],"13":[11],"138":[10],"139":[10],"140":[10],"141":[10],"142":[10],"143":[10],"144":[10],"145":[10],"146":[10],"147":[17,10],"148":[10],"149":[10],"150":[10],"20":[10],"151":[17,10],"152":[10],"153":[39],"154":[39],"40":[39],"155":[39],"156":[34],"157":[34]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","MergeEffect","UnityEngine.Mesh","BlinkEffect","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.CanvasRenderer","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Slider","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Button","GameManager","Ply_Pool","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEditor.Audio.AudioMixerGroupController","Box","ItemConveyor","UnityEngine.GameObject","UIManager","UnityEngine.Camera","InputManager","CameraController","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.SpriteRenderer","UnityEngine.SphereCollider","Item","BoxGraphicController","Spine.Unity.SkeletonAnimation","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","Spine.Unity.SkeletonDataAsset","ItemHolder","UnityEngine.BoxCollider","ItemSetupTool","ScreenHeightPositionAnchor","TMPro.TextMeshPro","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.Examples.BasicPlatformerController","UnityEngine.CharacterController","Spine.Unity.Examples.SkeletonGhost","Spine.Unity.SkeletonRenderer","Spine.Unity.Examples.RenderExistingMesh","Spine.Unity.Examples.SkeletonRenderTexture","Spine.Unity.Examples.SkeletonRenderTextureFadeout","Spine.Unity.Examples.SkeletonRagdoll","Spine.Unity.Examples.SkeletonRagdoll2D","Spine.Unity.Examples.SkeletonUtilityEyeConstraint","Spine.Unity.SkeletonUtilityBone","Spine.Unity.Examples.SkeletonUtilityGroundConstraint","Spine.Unity.Examples.SpineGauge","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "DreamyRoom";

Deserializers.lunaInitializationTime = "06/01/2026 09:19:15";

Deserializers.lunaDaysRunning = "28.7";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "PLY_DreamyRoom_Lv693";

Deserializers.lunaAppID = "27329";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "5185";

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

Deserializers.buildID = "6ce59e74-9089-46fc-8888-f922a55a0445";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

