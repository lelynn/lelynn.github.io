---
layout: page
title: ML engineer
permalink: /about/
---

<div style="display: flex; align-items: center; flex-wrap: wrap; justify-content: flex-start;">
  <img src="{{ site.baseurl }}/images/profile_pic.jpg" alt="my photo" width="200" style="margin-right: 20px; border-radius: 8px; flex-shrink: 0;">
  <p style="flex-grow: 1; max-width: 70%; text-align: left;">
    I'm a multidisciplinary ML engineer with a background in Computational Neuroscience, AI, and creative software development. I enjoy building systems that explore the intersection of brains, code, and tools for insight. Trained as a scientist, I combine strong academic/research skills with hands-on engineering across disciplines.  
    I enjoy making things that serve real needs, whether it's for science/education, safety, health, efficiency, or everyday utility. If something can make life better for a lot of people, I'm excited to build it.
  </p>
</div>

<!-- responsive layout -->
<style>
  @media (max-width: 768px) {
    div {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    img {
      margin-bottom: 20px;
    }

    p {
      max-width: 100%;
      padding: 0 15px;
    }
  }
</style>
<div style="margin-top: 40px; margin-bottom: 40px; border: 1px solid #eee; border-radius: 8px; overflow: hidden; background: #fff;">

  <img src="{{ site.baseurl }}/assets/img/banners/areas_of_expertise.png" 
       alt="areas of expertise banner" 
       style="width: 100%; max-height: 100px; object-fit: cover; opacity: 0.6;">
</div>
  <div style="padding: 12px;">
    <h2 style="margin-top: 0;">Areas of expertise</h2>
    <p>I design intelligent tools:</p>

    <ul style="margin-left: 0; padding-left: 1.2em;">
      <li><strong>AI & ML</strong> – generative models, custom training loops, prototyping, evaluation (PyTorch, Hugging Face)</li>
      <li><strong>software engineering</strong> – GUI development, webscraping, web development, debugging, deployment, version control (Git), environment management (Conda, Pip, Shell), remote workflows (SSH)</li>
      <li><strong>data & backend systems</strong> – pipelines, scraping, automation, dashboards</li>
      <li><strong>neuro-inspired modeling</strong> – decoding/encoding models, inductive biases, foveated vision, eye movement prediction, behavioral experiments, human-computer interaction, receptive field mapping, fMRI/MUA signal analysis</li>
      <li><strong>creative tools</strong> – browser demos, interactive experiments, game development (Unity & C#)</li>
      <li><strong>academic skills</strong> – peer-reviewed writing, experimental design, literature reviews</li>
      <li><strong>languages</strong> – Python, C#, C++, MATLAB, SQL, LaTeX, HTML</li>
    </ul>
  </div>
<!-- </div> -->

<style>
  .project-tile img {
    opacity: 0.3;
    transition: opacity 0.3s ease-in-out;
  }

  .project-tile:hover img {
    opacity: 1;
  }
</style>

### Highlighted projects
<div style="display: flex; flex-wrap: wrap; gap: 16px; justify-content: space-between;">

  <div style="flex: 1 1 calc(50% - 8px); min-width: 300px;">
    <a href="/projects#inverse-rf" class="project-tile" style="display: block; border-radius: 10px; background: #f5f5f5; text-decoration: none; color: black; border: 1px solid #ddd; overflow: hidden;">
      <img src="{{ site.baseurl }}/assets/img/project_IRFA/IRFA.png" alt="inverse receptive field banner" style="width: 100%; height: 150px; object-fit: cover; object-position: center;">
      <div style="padding: 12px 16px;">
        <strong>Inverse Receptive Field</strong><br>
        <small>End-to-end image reconstruction from brain activity using attention-based receptive field modeling</small>
        <div style="margin-top: 6px; font-size: 0.9em; color: #555;">
          transformer architecture · attention modules · PyTorch · neural decoding · CNN · spatial modeling · feature weighting · interpretability 
        </div>
      </div>
    </a>
  </div>

  <div style="flex: 1 1 calc(50% - 8px); min-width: 300px;">
    <a href="/projects#monkeysee" class="project-tile" style="display: block; border-radius: 10px; background: #f5f5f5; text-decoration: none; color: black; border: 1px solid #ddd; overflow: hidden;">
      <img src="{{ site.baseurl }}/assets/img/project_monkeysee/monkeysee.png"  alt="monkey icon" style="width: 100%; height: 150px; object-fit: cover; object-position: center;">
      <div style="padding: 12px 16px;">
        <strong>MonkeySee (NeurIPS)</strong><br>
        <small>Reconstructing natural images from macaque brain data</small>
        <div style="margin-top: 6px; font-size: 0.9em; color: #555;">
          machine learning · CNN · GAN · PyTorch · temporal dynamics · image data · OpenCV · preprocessing · Git · SSH · Conda
        </div>
      </div>
    </a>
  </div>

  <div style="flex: 1 1 calc(50% - 8px); min-width: 300px;">
    <a href="/projects#brain2pix" class="project-tile" style="display: block; border-radius: 10px; background: #f5f5f5; text-decoration: none; color: black; border: 1px solid #ddd; overflow: hidden;">
      <img src="{{ site.baseurl }}/assets/img/project_brain2pix/tardis.png" alt="brain2pix banner" style="width: 100%; height: 150px; object-fit: cover; object-position: center;">
      <div style="padding: 12px 16px;">
        <strong>Brain2Pix</strong><br>
        <small>Reconstructing video frames from human brain activity</small>
        <div style="margin-top: 6px; font-size: 0.9em; color: #555;">
          video reconstruction · generative models · CNN · MXNet · Python · dynamic signals · OpenCV · evaluation
        </div>
      </div>
    </a>
  </div>

  <div style="flex: 1 1 calc(50% - 8px); min-width: 300px;">
    <a href="/projects#adversarial" class="project-tile" style="display: block; border-radius: 10px; background: #f5f5f5; text-decoration: none; color: black; border: 1px solid #ddd; overflow: hidden;">
      <img src="{{ site.baseurl }}/assets/img/project_adversarial/adversarial_lady.png" alt="adversarial attention banner" style="width: 100%; height: 150px; object-fit: cover; object-position: center;">
      <div style="padding: 12px 16px;">
        <strong>Adversarial Attention</strong><br>
        <small>Adversarial image generation for both ML models and the human visual system</small>
        <div style="margin-top: 6px; font-size: 0.9em; color: #555;">
          model ensembles · PyTorch · saliency maps · behavioral experiment design · eye tracking · infrared camera · EyeLink · MATLAB · statistics · GUIs · user interfaces · model optimization · plotting
        </div>
      </div>
    </a>
  </div>

  <div style="flex: 1 1 calc(50% - 8px); min-width: 300px;">
    <a href="/projects#climbersoap" class="project-tile" style="display: block; border-radius: 10px; background: #f5f5f5; text-decoration: none; color: black; border: 1px solid #ddd; overflow: hidden;">
      <img src="{{ site.baseurl }}/assets/img/project_climbersoap/climbersoap.png" alt="climbersoap banner" style="width: 100%; height: 150px; object-fit: cover; object-position: center;">
      <div style="padding: 12px 16px;">
        <strong>ClimberSoap</strong><br>
        <small>Creative climbing-inspired soaps</small>
        <div style="margin-top: 6px; font-size: 0.9em; color: #555;">
          product design · entrepreneurship · branding · web hosting · e-commerce
        </div>
      </div>
    </a>
  </div>

  <div style="flex: 1 1 calc(50% - 8px); min-width: 300px;">
    <a href="/projects#mypinger" class="project-tile" style="display: block; border-radius: 10px; background: #f5f5f5; text-decoration: none; color: black; border: 1px solid #ddd; overflow: hidden;">
      <img src="{{ site.baseurl }}/assets/img/project_mypinger/webscraper.png" alt="mypinger banner" style="width: 100%; height: 150px; object-fit: cover; object-position: center;">
      <div style="padding: 12px 16px;">
        <strong>MyPinger</strong><br>
        <small>Tracking item prices across the web</small>
        <div style="margin-top: 6px; font-size: 0.9em; color: #555;">
          web scraping · automation · C++ · Selenium
        </div>
      </div>
    </a>
  </div>

</div>


👉 for more projects, visit the [projects page](/projects)

## 📚 Academic papers

<div style="background: #f9f9f9; padding: 16px; border-radius: 8px; border: 1px solid #eee; font-size: 0.85em; line-height: 1.6; color: #444;">

<p>Le, L., Ambrogioni, L., Seeliger, K., Güçlütürk, Y., van Gerven, M., & Güçlü, U. (2022). <em>Brain2Pix: Fully convolutional naturalistic video frame reconstruction from brain activity</em>. <i>Frontiers in Neuroscience, 16</i>, 1684. <a href="https://www.frontiersin.org/articles/10.3389/fnins.2022.940972/full" target="_blank">[link]</a></p>

<p>Le, L., Kimman, N., Dado, T., Seeliger, K., Papale, P., Lozano, A., & Roelfsema, P. (2025). <em>Neural encoding with affine feature response transforms</em>. <i>arXiv:2501.03741</i>. <a href="https://arxiv.org/abs/2501.03741" target="_blank">[link]</a></p>

<p>Le, L., Dado, T., Seeliger, K., Papale, P., Lozano, A., Roelfsema, P., & Güçlütürk, Y. (2025). <em>Inverse receptive field attention for naturalistic image reconstruction from the brain</em>. <i>arXiv:2501.03051</i>. <a href="https://arxiv.org/abs/2501.03051" target="_blank">[link]</a></p>

<p>Le, L., Papale, P., Seeliger, K., Lozano, A., Dado, T., Wang, F., & Roelfsema, P. (2024). <em>MonkeySee: Space-time-resolved reconstructions of natural images from macaque multi-unit activity</em>. <i>NeurIPS</i>. <a href="https://proceedings.neurips.cc/paper_files/paper/2024/file/aa7eb65738b5bc71c81848fba9111c97-Paper-Conference.pdf" target="_blank">[link]</a></p>

<p>Le, L. (2020). <em>Adversarial images steering human attention</em> (Master’s thesis). Radboud University.</p>

<p>Le, L. (2018). <em>Biological motion for visual cortex induced phosphenes</em> (Undergraduate thesis).</p>

<p style="margin-top: 10px;">More on <a href="https://scholar.google.com/citations?user=M68qL4cAAAAJ&hl=en" target="_blank">Google Scholar</a></p>

</div>

<!-- </div> -->
