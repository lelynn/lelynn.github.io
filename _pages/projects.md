---
layout: page
title: Projects
permalink: /projects/
---

# 🛠️ Projects

Here’s a selection of recent work blending AI, neuroscience, and creative tooling.

---

## 🧠 Brain2Pix

Reconstructed naturalistic images and video frames from fMRI data using image-to-image networks and retinotopic receptive field mapping.

- 🔬 **Method**: Built a fully convolutional network
- 📊 **Trained with**: VGG perceptual loss + adversarial regularizer
- 🎥 **Output**: Generated smooth, accurate reconstructions from held-out brain data

👉 [Paper (Frontiers in Neuroscience)](https://www.frontiersin.org/articles/10.3389/fnins.2022.940972/full)  
👉 [Code (GitHub)](https://github.com/neuralcodinglab/brain2pix)

<!-- ![Brain2Pix Output](/assets/img/project_brain2pix/tardis.png){: width="600" } -->

---

## 🐒 MonkeySee

A brain-to-image system that reconstructs natural scenes from multiunit activity (MUA) recorded in the macaque visual cortex.

- 🔬 **Spatial & temporal models**: Used either 15 retinotopically organized electrode channels or temporally windowed chunks for reconstruction  
- 🧠 **Input**: Raw multiunit electrode signals from visual cortex, aligned with known receptive field locations  
- 🎯 **Output**: Full-frame reconstructions of natural images from unseen brain data  
- 🧪 **Techniques**: Convolutional generator, adversarial regularizer, perceptual VGG loss


👉 [Paper (NeurIPS 2024)](https://neurips.cc/virtual/2024/102677)  
👉 [Code (GitHub)](https://github.com/neuralcodinglab/MonkeySee)


---
